"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["@esri-calcite-components-dist-components-calcite-flow-item"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ FloatingArrow; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


const CSS = {
    arrow: "calcite-floating-ui-arrow",
    arrowStroke: "calcite-floating-ui-arrow__stroke",
};
const DEFAULTS = {
    width: 12,
    height: 6,
    strokeWidth: 1,
};
/**
 * Renders a SVG element to be used as a floating-ui arrow.
 *
 * This functional component should be rendered inside a `FloatingUIComponent` when it needs an arrow element.
 *
 * @param floatingLayout.floatingLayout
 * @param floatingLayout – The effective floating layout to render the arrow vertically or horizontally. Possible values: `vertical` or `horizontal`.
 *
 * See [floating-ui](https://github.com/Esri/calcite-design-system/blob/dev/src/utils/floating-ui.ts)
 * @param floatingLayout.key
 * @param floatingLayout.ref
 */
const FloatingArrow = ({ floatingLayout, key, ref, }) => {
    const { width, height, strokeWidth } = DEFAULTS;
    const svgX = width / 2;
    const isVertical = floatingLayout === "vertical";
    const dValue = "M0,0" +
        ` H${width}` +
        ` L${width - svgX},${height}` +
        ` Q${svgX},${height} ${svgX},${height}` +
        " Z";
    return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: CSS.arrow, height: width, key: key, ref: ref, viewBox: `0 0 ${width} ${width + (!isVertical ? strokeWidth : 0)}`, width: width + (isVertical ? strokeWidth : 0) },
        strokeWidth > 0 && ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: CSS.arrowStroke, d: dValue, fill: "none", "stroke-width": strokeWidth + 1 })),
        (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: dValue, stroke: "none" })));
};



//# sourceMappingURL=FloatingArrow.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/Heading.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/Heading.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ Heading; },
/* harmony export */   c: function() { return /* binding */ constrainHeadingLevel; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


function constrainHeadingLevel(level) {
    return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
    const HeadingTag = props.level ? `h${props.level}` : "div";
    delete props.level;
    return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { class: props.class, key: props.key }, children));
};



//# sourceMappingURL=Heading.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/action-menu.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/action-menu.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ ActionMenu; },
/* harmony export */   S: function() { return /* binding */ SLOTS; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/@esri/calcite-components/dist/components/array.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */











const CSS = {
    menu: "menu",
    defaultTrigger: "default-trigger",
};
const SLOTS = {
    tooltip: "tooltip",
    trigger: "trigger",
};
const ICONS = {
    menu: "ellipsis",
};
const activeAttr = "data-active";

const actionMenuCss = ":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteActionMenuStyle0 = actionMenuCss;

const SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
const ActionMenu = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class ActionMenu extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteActionMenuOpen = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteActionMenuOpen", 6);
        this.actionElements = [];
        this.guid = `calcite-action-menu-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
        this.menuId = `${this.guid}-menu`;
        this.menuButtonId = `${this.guid}-menu-button`;
        // --------------------------------------------------------------------------
        //
        //  Component Methods
        //
        // --------------------------------------------------------------------------
        this.connectMenuButtonEl = () => {
            const { menuButtonId, menuId, open, label } = this;
            const menuButtonEl = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
            if (this.menuButtonEl === menuButtonEl) {
                return;
            }
            this.disconnectMenuButtonEl();
            this.menuButtonEl = menuButtonEl;
            this.setTooltipReferenceElement();
            if (!menuButtonEl) {
                return;
            }
            menuButtonEl.active = open;
            menuButtonEl.setAttribute("aria-controls", menuId);
            menuButtonEl.setAttribute("aria-expanded", (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(open));
            menuButtonEl.setAttribute("aria-haspopup", "true");
            if (!menuButtonEl.id) {
                menuButtonEl.id = menuButtonId;
            }
            if (!menuButtonEl.label) {
                menuButtonEl.label = label;
            }
            if (!menuButtonEl.text) {
                menuButtonEl.text = label;
            }
            menuButtonEl.addEventListener("click", this.menuButtonClick);
            menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
        };
        this.disconnectMenuButtonEl = () => {
            const { menuButtonEl } = this;
            if (!menuButtonEl) {
                return;
            }
            menuButtonEl.removeEventListener("click", this.menuButtonClick);
            menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
        };
        this.setMenuButtonEl = (event) => {
            const actions = event.target
                .assignedElements({
                flatten: true,
            })
                .filter((el) => el?.matches("calcite-action"));
            this.slottedMenuButtonEl = actions[0];
            this.connectMenuButtonEl();
        };
        this.setDefaultMenuButtonEl = (el) => {
            this.defaultMenuButtonEl = el;
            this.connectMenuButtonEl();
        };
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.handleCalciteActionClick = () => {
            this.open = false;
            this.setFocus();
        };
        this.menuButtonClick = () => {
            this.toggleOpen();
        };
        this.updateTooltip = (event) => {
            const tooltips = event.target
                .assignedElements({
                flatten: true,
            })
                .filter((el) => el?.matches("calcite-tooltip"));
            this.tooltipEl = tooltips[0];
            this.setTooltipReferenceElement();
        };
        this.setTooltipReferenceElement = () => {
            const { tooltipEl, expanded, menuButtonEl, open } = this;
            if (tooltipEl) {
                tooltipEl.referenceElement = !expanded && !open ? menuButtonEl : null;
            }
        };
        this.updateAction = (action, index) => {
            const { guid, activeMenuItemIndex } = this;
            const id = `${guid}-action-${index}`;
            action.tabIndex = -1;
            action.setAttribute("role", "menuitem");
            if (!action.id) {
                action.id = id;
            }
            // data attribute is used to style the "activeMenuItemIndex" action using token focus styling.
            action.toggleAttribute(activeAttr, index === activeMenuItemIndex);
        };
        this.updateActions = (actions) => {
            actions?.forEach(this.updateAction);
        };
        this.handleDefaultSlotChange = (event) => {
            const actions = event.target
                .assignedElements({
                flatten: true,
            })
                .reduce((previousValue, currentValue) => {
                if (currentValue?.matches("calcite-action")) {
                    previousValue.push(currentValue);
                    return previousValue;
                }
                if (currentValue?.matches("calcite-action-group")) {
                    return previousValue.concat(Array.from(currentValue.querySelectorAll("calcite-action")));
                }
                return previousValue;
            }, []);
            this.actionElements = actions.filter((action) => !action.disabled && !action.hidden);
        };
        this.menuButtonKeyDown = (event) => {
            const { key } = event;
            const { actionElements, activeMenuItemIndex, open } = this;
            if (!actionElements.length) {
                return;
            }
            if ((0,_key_js__WEBPACK_IMPORTED_MODULE_3__.i)(key)) {
                event.preventDefault();
                if (!open) {
                    this.toggleOpen();
                    return;
                }
                const action = actionElements[activeMenuItemIndex];
                action ? action.click() : this.toggleOpen(false);
            }
            if (key === "Tab") {
                this.open = false;
                return;
            }
            if (key === "Escape") {
                this.toggleOpen(false);
                event.preventDefault();
                return;
            }
            this.handleActionNavigation(event, key, actionElements);
        };
        this.handleActionNavigation = (event, key, actions) => {
            if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
                return;
            }
            event.preventDefault();
            if (!this.open) {
                this.toggleOpen();
                if (key === "Home" || key === "ArrowDown") {
                    this.activeMenuItemIndex = 0;
                }
                if (key === "End" || key === "ArrowUp") {
                    this.activeMenuItemIndex = actions.length - 1;
                }
                return;
            }
            if (key === "Home") {
                this.activeMenuItemIndex = 0;
            }
            if (key === "End") {
                this.activeMenuItemIndex = actions.length - 1;
            }
            const currentIndex = this.activeMenuItemIndex;
            if (key === "ArrowUp") {
                this.activeMenuItemIndex = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(Math.max(currentIndex - 1, -1), actions.length);
            }
            if (key === "ArrowDown") {
                this.activeMenuItemIndex = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + 1, actions.length);
            }
        };
        this.toggleOpenEnd = () => {
            this.setFocus();
            this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
        };
        this.toggleOpen = (value = !this.open) => {
            this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd);
            this.open = value;
        };
        this.handlePopoverOpen = () => {
            this.open = true;
        };
        this.handlePopoverClose = () => {
            this.open = false;
        };
        this.appearance = "solid";
        this.expanded = false;
        this.flipPlacements = undefined;
        this.label = undefined;
        this.open = false;
        this.overlayPositioning = "absolute";
        this.placement = "auto";
        this.scale = undefined;
        this.menuButtonEl = undefined;
        this.activeMenuItemIndex = -1;
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        this.connectMenuButtonEl();
    }
    componentWillLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    }
    componentDidLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
    }
    disconnectedCallback() {
        this.disconnectMenuButtonEl();
    }
    expandedHandler() {
        this.open = false;
        this.setTooltipReferenceElement();
    }
    openHandler(open) {
        this.activeMenuItemIndex = this.open ? 0 : -1;
        if (this.menuButtonEl) {
            this.menuButtonEl.active = open;
        }
        this.calciteActionMenuOpen.emit();
        this.setTooltipReferenceElement();
    }
    activeMenuItemIndexHandler() {
        this.updateActions(this.actionElements);
    }
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.menuButtonEl);
    }
    renderMenuButton() {
        const { appearance, label, scale, expanded } = this;
        const menuButtonSlot = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.trigger, onSlotchange: this.setMenuButtonEl }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-action", { appearance: appearance, class: CSS.defaultTrigger, icon: ICONS.menu, ref: this.setDefaultMenuButtonEl, scale: scale, text: label, textEnabled: expanded })));
        return menuButtonSlot;
    }
    renderMenuItems() {
        const { actionElements, activeMenuItemIndex, open, menuId, menuButtonEl, label, placement, overlayPositioning, flipPlacements, } = this;
        const activeAction = actionElements[activeMenuItemIndex];
        const activeDescendantId = activeAction?.id || null;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-popover", { autoClose: true, flipPlacements: flipPlacements, focusTrapDisabled: true, label: label, offsetDistance: 0, onCalcitePopoverClose: this.handlePopoverClose, onCalcitePopoverOpen: this.handlePopoverOpen, open: open, overlayPositioning: overlayPositioning, placement: placement, pointerDisabled: true, referenceElement: menuButtonEl }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("div", { "aria-activedescendant": activeDescendantId, "aria-labelledby": menuButtonEl?.id, class: CSS.menu, id: menuId, onClick: this.handleCalciteActionClick, role: "menu", tabIndex: -1 }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
    }
    render() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.Fragment, { key: 'd13aa4f3d43fb5651c0487ccfa456813f69955d2' }, this.renderMenuButton(), this.renderMenuItems(), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { key: 'b63d187516c766db6a1b1db3df34050fdec9e6ce', name: SLOTS.tooltip, onSlotchange: this.updateTooltip })));
    }
    isValidKey(key, supportedKeys) {
        return !!supportedKeys.find((k) => k === key);
    }
    get el() { return this; }
    static get watchers() { return {
        "expanded": ["expandedHandler"],
        "open": ["openHandler"],
        "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
    }; }
    static get style() { return CalciteActionMenuStyle0; }
}, [1, "calcite-action-menu", {
        "appearance": [513],
        "expanded": [516],
        "flipPlacements": [16],
        "label": [1],
        "open": [1540],
        "overlayPositioning": [513, "overlay-positioning"],
        "placement": [513],
        "scale": [513],
        "menuButtonEl": [32],
        "activeMenuItemIndex": [32],
        "setFocus": [64]
    }, undefined, {
        "expanded": ["expandedHandler"],
        "open": ["openHandler"],
        "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-action-menu", "calcite-action", "calcite-icon", "calcite-loader", "calcite-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-action-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ActionMenu);
            }
            break;
        case "calcite-action":
            if (!customElements.get(tagName)) {
                (0,_action_js__WEBPACK_IMPORTED_MODULE_5__.d)();
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                (0,_loader_js__WEBPACK_IMPORTED_MODULE_7__.d)();
            }
            break;
        case "calcite-popover":
            if (!customElements.get(tagName)) {
                (0,_popover_js__WEBPACK_IMPORTED_MODULE_8__.d)();
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=action-menu.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/action.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/action.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ Action; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@esri/calcite-components/dist/components/browser.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */













const CSS = {
    button: "button",
    buttonTextVisible: "button--text-visible",
    buttonCompact: "button--compact",
    indicatorText: "indicator-text",
    iconContainer: "icon-container",
    slotContainer: "slot-container",
    slotContainerHidden: "slot-container--hidden",
    textContainer: "text-container",
    textContainerVisible: "text-container--visible",
    indicatorWithIcon: "indicator-with-icon",
    indicatorWithoutIcon: "indicator-without-icon",
};
const SLOTS = {
    tooltip: "tooltip",
};

const actionCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host,button{border-end-end-radius:var(--calcite-action-corner-radius-end-end, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-end-start-radius:var(--calcite-action-corner-radius-end-start, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-start-end-radius:var(--calcite-action-corner-radius-start-end, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-start-start-radius:var(--calcite-action-corner-radius-start-start, var(--calcite-action-corner-radius, var(--calcite-corner-radius)))}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1));color:var(--calcite-action-text-color, var(--calcite-color-text-3));text-align:unset;flex:1 0 auto}.button:hover,.button:focus{background-color:var(--calcite-action-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1))}.button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.button:active{background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}.icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus{color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1));background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}:host([active]) .button:active{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{margin-inline-end:0px}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-color-transparent-press)}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:\"\";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:\"\";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled]):host([active]) .button,:host([disabled]):host([active]) .button:hover,:host([disabled]):host([active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}";
const CalciteActionStyle0 = actionCss;

const Action = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.proxyCustomElement)(class Action extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.forceUpdate)(this));
        this.guid = `calcite-action-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
        this.indicatorId = `${this.guid}-indicator`;
        this.buttonId = `${this.guid}-button`;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.handleTooltipSlotChange = (event) => {
            const tooltips = event.target
                .assignedElements({
                flatten: true,
            })
                .filter((el) => el?.matches("calcite-tooltip"));
            const tooltip = tooltips[0];
            if (tooltip) {
                tooltip.referenceElement = this.buttonEl;
            }
        };
        this.active = false;
        this.alignment = undefined;
        this.appearance = "solid";
        this.compact = false;
        this.disabled = false;
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.indicator = false;
        this.label = undefined;
        this.loading = false;
        this.scale = "m";
        this.text = undefined;
        this.textEnabled = false;
        this.messages = undefined;
        this.messageOverrides = undefined;
        this.effectiveLocale = "";
        this.defaultMessages = undefined;
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    effectiveLocaleChange() {
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
        this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    }
    async componentWillLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
        if ((0,_browser_js__WEBPACK_IMPORTED_MODULE_8__.i)()) {
            await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
        }
    }
    componentDidLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
    }
    disconnectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
        this.mutationObserver?.disconnect();
    }
    componentDidRender() {
        (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
        this.buttonEl?.focus();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderTextContainer() {
        const { text, textEnabled } = this;
        const textContainerClasses = {
            [CSS.textContainer]: true,
            [CSS.textContainerVisible]: textEnabled,
        };
        return text ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: textContainerClasses, key: "text-container" }, text)) : null;
    }
    renderIndicatorText() {
        const { indicator, messages, indicatorId, buttonId } = this;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("div", { "aria-labelledby": buttonId, "aria-live": "polite", class: CSS.indicatorText, id: indicatorId, role: "region" }, indicator ? messages.indicator : null));
    }
    renderIconContainer() {
        const { loading, icon, scale, el, iconFlipRtl, indicator } = this;
        const loaderScale = scale === "l" ? "l" : "m";
        const calciteLoaderNode = loading ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-loader", { inline: true, label: this.messages.loading, scale: loaderScale })) : null;
        const calciteIconNode = icon ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("calcite-icon", { class: { [CSS.indicatorWithIcon]: indicator }, flipRtl: iconFlipRtl, icon: icon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) })) : null;
        const iconNode = calciteLoaderNode || calciteIconNode;
        const hasIconToDisplay = iconNode || el.children?.length;
        const slotContainerNode = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: {
                [CSS.slotContainer]: true,
                [CSS.slotContainerHidden]: loading,
            } }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("slot", null)));
        return hasIconToDisplay ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("div", { "aria-hidden": "true", class: CSS.iconContainer, key: "icon-container" }, iconNode, slotContainerNode)) : null;
    }
    render() {
        const { active, compact, disabled, icon, loading, textEnabled, label, text, indicator, indicatorId, buttonId, messages, } = this;
        const labelFallback = label || text;
        const ariaLabel = labelFallback
            ? `${labelFallback}${indicator ? ` (${messages.indicator})` : ""}`
            : "";
        const buttonClasses = {
            [CSS.button]: true,
            [CSS.buttonTextVisible]: textEnabled,
            [CSS.buttonCompact]: compact,
        };
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.Host, { key: '3b459307dcb6f8d373e70cd5c7a45d122565a70e' }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)(_interactive_js__WEBPACK_IMPORTED_MODULE_2__.I, { key: '3a81f1fb62a66f1dbd608f095ed90f2d47a9daf6', disabled: disabled }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("button", { key: 'bb5249babc116d462becd6b9a056ca0d368c6e09', "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(loading), "aria-controls": indicator ? indicatorId : null, "aria-label": ariaLabel, "aria-pressed": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(active), class: buttonClasses, disabled: disabled, id: buttonId, ref: (buttonEl) => (this.buttonEl = buttonEl) }, this.renderIconContainer(), this.renderTextContainer(), !icon && indicator && (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("div", { class: CSS.indicatorWithoutIcon, key: "indicator-no-icon" })), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_11__.h)("slot", { key: '983989711d64076eca866c1928f9c777331fcba4', name: SLOTS.tooltip, onSlotchange: this.handleTooltipSlotChange }), this.renderIndicatorText())));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteActionStyle0; }
}, [1, "calcite-action", {
        "active": [516],
        "alignment": [513],
        "appearance": [513],
        "compact": [516],
        "disabled": [516],
        "icon": [1],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "indicator": [516],
        "label": [1],
        "loading": [516],
        "scale": [513],
        "text": [1],
        "textEnabled": [516, "text-enabled"],
        "messages": [1040],
        "messageOverrides": [1040],
        "effectiveLocale": [32],
        "defaultMessages": [32],
        "setFocus": [64]
    }, undefined, {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-action", "calcite-icon", "calcite-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-action":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Action);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_9__.d)();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                (0,_loader_js__WEBPACK_IMPORTED_MODULE_10__.d)();
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=action.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/array.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/array.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ getRoundRobinIndex; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
function getRoundRobinIndex(index, total) {
    return (index + total) % total;
}



//# sourceMappingURL=array.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-flow-item.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-flow-item.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteFlowItem: function() { return /* binding */ CalciteFlowItem; },
/* harmony export */   defineCustomElement: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel.js */ "./node_modules/@esri/calcite-components/dist/components/panel.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */














const CSS = {
    backButton: "back-button",
};
const ICONS = {
    backLeft: "chevron-left",
    backRight: "chevron-right",
};
const SLOTS = {
    actionBar: "action-bar",
    alerts: "alerts",
    contentTop: "content-top",
    contentBottom: "content-bottom",
    headerActionsStart: "header-actions-start",
    headerActionsEnd: "header-actions-end",
    headerMenuActions: "header-menu-actions",
    headerContent: "header-content",
    fab: "fab",
    footer: "footer",
    footerActions: "footer-actions",
    footerEnd: "footer-end",
    footerStart: "footer-start",
};

const flowItemCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteFlowItemStyle0 = flowItemCss;

const FlowItem = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.proxyCustomElement)(class FlowItem extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteFlowItemBack = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteFlowItemBack", 7);
        this.calciteFlowItemScroll = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteFlowItemScroll", 6);
        this.calciteFlowItemClose = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteFlowItemClose", 6);
        this.calciteFlowItemToggle = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.createEvent)(this, "calciteFlowItemToggle", 6);
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.handleInternalPanelScroll = (event) => {
            if (event.target !== this.containerEl) {
                return;
            }
            event.stopPropagation();
            this.calciteFlowItemScroll.emit();
        };
        this.handleInternalPanelClose = (event) => {
            if (event.target !== this.containerEl) {
                return;
            }
            event.stopPropagation();
            this.closed = true;
            this.calciteFlowItemClose.emit();
        };
        this.handleInternalPanelToggle = (event) => {
            if (event.target !== this.containerEl) {
                return;
            }
            event.stopPropagation();
            this.collapsed = event.target.collapsed;
            this.calciteFlowItemToggle.emit();
        };
        this.backButtonClick = () => {
            this.calciteFlowItemBack.emit();
        };
        this.setBackRef = (node) => {
            this.backButtonEl = node;
        };
        this.setContainerRef = (node) => {
            this.containerEl = node;
        };
        this.closable = false;
        this.closed = false;
        this.collapsed = false;
        this.collapseDirection = "down";
        this.collapsible = false;
        this.beforeBack = undefined;
        this.beforeClose = undefined;
        this.description = undefined;
        this.disabled = false;
        this.heading = undefined;
        this.headingLevel = undefined;
        this.loading = false;
        this.menuOpen = false;
        this.messageOverrides = undefined;
        this.messages = undefined;
        this.overlayPositioning = "absolute";
        this.scale = "m";
        this.showBackButton = false;
        this.defaultMessages = undefined;
        this.effectiveLocale = "";
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    }
    async componentWillLoad() {
        await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    }
    componentDidRender() {
        (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
    }
    disconnectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    }
    componentDidLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    }
    effectiveLocaleChange() {
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
    }
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    /**
     * Sets focus on the component.
     *
     * @returns promise.
     */
    async setFocus() {
        await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
        const { backButtonEl, containerEl } = this;
        if (backButtonEl) {
            return backButtonEl.setFocus();
        }
        else if (containerEl) {
            return containerEl.setFocus();
        }
    }
    /**
     * Scrolls the component's content to a specified set of coordinates.
     *
     * @example
     * myCalciteFlowItem.scrollContentTo({
     *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
     *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
     *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
     * });
     * @param options - allows specific coordinates to be defined.
     * @returns - promise that resolves once the content is scrolled to.
     */
    async scrollContentTo(options) {
        await this.containerEl?.scrollContentTo(options);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderBackButton() {
        const { el } = this;
        const rtl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.a)(el) === "rtl";
        const { showBackButton, backButtonClick, messages } = this;
        const label = messages.back;
        const icon = rtl ? ICONS.backRight : ICONS.backLeft;
        return showBackButton ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-action", { "aria-label": label, class: CSS.backButton, icon: icon, key: "flow-back-button", onClick: backButtonClick, ref: this.setBackRef, scale: "s", slot: "header-actions-start", text: label, title: label })) : null;
    }
    render() {
        const { collapsed, collapseDirection, collapsible, closable, closed, description, disabled, heading, headingLevel, loading, menuOpen, messages, overlayPositioning, beforeClose, } = this;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.Host, { key: '2e7872bb2687db0b67ddbf375f8ec0beaabbda36' }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)(_interactive_js__WEBPACK_IMPORTED_MODULE_1__.I, { key: 'a9418954405a2cec2092bae3be5d77f02306e3c9', disabled: disabled }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("calcite-panel", { key: 'd563c751421bf2d66c03286deaa613e09f585546', beforeClose: beforeClose, closable: closable, closed: closed, collapseDirection: collapseDirection, collapsed: collapsed, collapsible: collapsible, description: description, disabled: disabled, heading: heading, headingLevel: headingLevel, loading: loading, menuOpen: menuOpen, messageOverrides: messages, onCalcitePanelClose: this.handleInternalPanelClose, onCalcitePanelScroll: this.handleInternalPanelScroll, onCalcitePanelToggle: this.handleInternalPanelToggle, overlayPositioning: overlayPositioning, ref: this.setContainerRef, scale: this.scale }, this.renderBackButton(), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: 'c506ec8bb4debbd6a9da6c7941878de49776f614', name: SLOTS.actionBar, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.actionBar }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: 'e76e55e654ff878acff734bdf387402a9e262159', name: SLOTS.alerts, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.alerts }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: 'f7ab8839d7b101e31087130ebf3e36af1ec7da24', name: SLOTS.headerActionsStart, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerActionsStart }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: '2932c4c15b168732356b8e55fcc3064f5b3f4cf5', name: SLOTS.headerActionsEnd, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerActionsEnd }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: '1ef8a9050683022733695445092f8c626487d87b', name: SLOTS.headerContent, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerContent }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: '24c0ab570a601a6c0edfb0c820e580fd24b158ce', name: SLOTS.headerMenuActions, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.headerMenuActions }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: 'ec55bbe7ba939a6efb35225850c37a1aadb97275', name: SLOTS.fab, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.fab }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: 'aa0bfec47656ef9f7f575cd933897a7909e5badc', name: SLOTS.contentTop, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.contentTop }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: 'e23532d080e2df529c2aeb6af043c6efe7a0ab6d', name: SLOTS.contentBottom, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.contentBottom }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: 'db6ffc0d9300c77067a4c88ab277de685c7713af', name: SLOTS.footerStart, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.footerStart }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: '5f249356da9292f34c4036d0d0741f048fe999e9', name: SLOTS.footer, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.footer }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: '7476137bacc0f3be5c97682c5027f74d73254765', name: SLOTS.footerEnd, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.footerEnd }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: '58f60a46c42a05abe9b100a57d478d991e4f25bc', name: SLOTS.footerActions, slot: _panel_js__WEBPACK_IMPORTED_MODULE_5__.S.footerActions }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_12__.h)("slot", { key: '926a8d94b76b6fcdef6dfd219ba8180c44f81c35' })))));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteFlowItemStyle0; }
}, [1, "calcite-flow-item", {
        "closable": [516],
        "closed": [516],
        "collapsed": [516],
        "collapseDirection": [1, "collapse-direction"],
        "collapsible": [516],
        "beforeBack": [16],
        "beforeClose": [16],
        "description": [1],
        "disabled": [516],
        "heading": [1],
        "headingLevel": [514, "heading-level"],
        "loading": [516],
        "menuOpen": [516, "menu-open"],
        "messageOverrides": [1040],
        "messages": [1040],
        "overlayPositioning": [513, "overlay-positioning"],
        "scale": [513],
        "showBackButton": [4, "show-back-button"],
        "defaultMessages": [32],
        "effectiveLocale": [32],
        "setFocus": [64],
        "scrollContentTo": [64]
    }, undefined, {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-flow-item", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-panel", "calcite-popover", "calcite-scrim"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-flow-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FlowItem);
            }
            break;
        case "calcite-action":
            if (!customElements.get(tagName)) {
                (0,_action_js__WEBPACK_IMPORTED_MODULE_6__.d)();
            }
            break;
        case "calcite-action-menu":
            if (!customElements.get(tagName)) {
                (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_7__.d)();
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                (0,_loader_js__WEBPACK_IMPORTED_MODULE_9__.d)();
            }
            break;
        case "calcite-panel":
            if (!customElements.get(tagName)) {
                (0,_panel_js__WEBPACK_IMPORTED_MODULE_5__.d)();
            }
            break;
        case "calcite-popover":
            if (!customElements.get(tagName)) {
                (0,_popover_js__WEBPACK_IMPORTED_MODULE_10__.d)();
            }
            break;
        case "calcite-scrim":
            if (!customElements.get(tagName)) {
                (0,_scrim_js__WEBPACK_IMPORTED_MODULE_11__.d)();
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteFlowItem = FlowItem;
const defineCustomElement = defineCustomElement$1;



//# sourceMappingURL=calcite-flow-item.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/debounce.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/debounce.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ Symbol$1; },
/* harmony export */   a: function() { return /* binding */ isSymbol; },
/* harmony export */   b: function() { return /* binding */ baseGetTag; },
/* harmony export */   c: function() { return /* binding */ isObjectLike; },
/* harmony export */   d: function() { return /* binding */ debounce; },
/* harmony export */   f: function() { return /* binding */ freeGlobal$1; },
/* harmony export */   i: function() { return /* binding */ isObject; },
/* harmony export */   r: function() { return /* binding */ root$1; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

const freeGlobal$1 = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();

const root$1 = root;

/** Built-in value references. */
var Symbol = root$1.Symbol;

const Symbol$1 = Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root$1.Date.now();
};

const now$1 = now;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}



//# sourceMappingURL=debounce.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/floating-ui.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ FloatingCSS; },
/* harmony export */   a: function() { return /* binding */ disconnectFloatingUI; },
/* harmony export */   b: function() { return /* binding */ defaultEndMenuPlacement; },
/* harmony export */   c: function() { return /* binding */ connectFloatingUI; },
/* harmony export */   d: function() { return /* binding */ defaultOffsetDistance; },
/* harmony export */   e: function() { return /* binding */ defaultMenuPlacement; },
/* harmony export */   f: function() { return /* binding */ filterValidFlipPlacements; },
/* harmony export */   r: function() { return /* binding */ reposition; }
/* harmony export */ });
/* harmony import */ var _resources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.js */ "./node_modules/@esri/calcite-components/dist/components/resources.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@esri/calcite-components/dist/components/browser.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/@esri/calcite-components/dist/components/debounce.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */





/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = min(...rects.map(rect => rect.left));
  const minY = min(...rects.map(rect => rect.top));
  const maxX = max(...rects.map(rect => rect.right));
  const maxY = max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = offset$1;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = autoPlacement$1;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = shift$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = flip$1;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
size;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = hide$1;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = arrow$1;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
inline;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
limitShift;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

function offsetParent(element) {
    return offsetParentPolyfill(element);
}
function flatTreeParent(element) {
    if (element.assignedSlot) {
        return element.assignedSlot;
    }
    if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
    }
    return element.parentNode;
}
function offsetParentPolyfill(element) {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        if (getComputedStyle(ancestor).display === 'none') {
            return null;
        }
    }
    for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        const style = getComputedStyle(ancestor);
        // Display:contents nodes aren't in the layout tree, so they should be skipped.
        if (style.display === 'contents') {
            continue;
        }
        if (style.position !== 'static' || isContainingBlock(style)) {
            return ancestor;
        }
        if (ancestor.tagName === 'BODY') {
            return ancestor;
        }
    }
    return null;
}

(function setUpFloatingUiForShadowDomPositioning() {
    if ((0,_browser_js__WEBPACK_IMPORTED_MODULE_2__.i)()) {
        const originalGetOffsetParent = platform.getOffsetParent;
        platform.getOffsetParent = (element) => originalGetOffsetParent(element, offsetParent);
    }
})();
function roundByDPR(value) {
    const dpr = window.devicePixelRatio || 1;
    return Math.round(value * dpr) / dpr;
}
/**
 * Positions the floating element relative to the reference element.
 *
 * **Note:** exported for testing purposes only
 *
 * @param root0
 * @param root0.referenceEl
 * @param root0.floatingEl
 * @param root0.overlayPositioning
 * @param root0.placement
 * @param root0.flipDisabled
 * @param root0.flipPlacements
 * @param root0.offsetDistance
 * @param root0.offsetSkidding
 * @param root0.arrowEl
 * @param root0.type
 * @param component
 * @param root0.referenceEl.referenceEl
 * @param root0.referenceEl.floatingEl
 * @param root0.referenceEl.overlayPositioning
 * @param root0.referenceEl.placement
 * @param root0.referenceEl.flipDisabled
 * @param root0.referenceEl.flipPlacements
 * @param root0.referenceEl.offsetDistance
 * @param root0.referenceEl.offsetSkidding
 * @param root0.referenceEl.arrowEl
 * @param root0.referenceEl.type
 * @param component.referenceEl
 * @param component.floatingEl
 * @param component.overlayPositioning
 * @param component.placement
 * @param component.flipDisabled
 * @param component.flipPlacements
 * @param component.offsetDistance
 * @param component.offsetSkidding
 * @param component.arrowEl
 * @param component.type
 */
const positionFloatingUI = 
/* we export arrow function to allow us to spy on it during testing */
async (component, { referenceEl, floatingEl, overlayPositioning = "absolute", placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type, }) => {
    if (!referenceEl || !floatingEl) {
        return null;
    }
    const isRTL = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.a)(floatingEl) === "rtl";
    const { x, y, placement: effectivePlacement, strategy: position, middlewareData, } = await computePosition(referenceEl, floatingEl, {
        strategy: overlayPositioning,
        placement: placement === "auto" || placement === "auto-start" || placement === "auto-end"
            ? undefined
            : getEffectivePlacement(placement, isRTL),
        middleware: getMiddleware({
            placement,
            flipDisabled,
            flipPlacements: flipPlacements?.map((placement) => getEffectivePlacement(placement, isRTL)),
            offsetDistance,
            offsetSkidding,
            arrowEl,
            type,
        }),
    });
    if (arrowEl && middlewareData.arrow) {
        const { x, y } = middlewareData.arrow;
        const side = effectivePlacement.split("-")[0];
        const alignment = x != null ? "left" : "top";
        const transform = ARROW_CSS_TRANSFORM[side];
        const reset = { left: "", top: "", bottom: "", right: "" };
        if ("floatingLayout" in component) {
            component.floatingLayout = side === "left" || side === "right" ? "horizontal" : "vertical";
        }
        Object.assign(arrowEl.style, {
            ...reset,
            [alignment]: `${alignment == "left" ? x : y}px`,
            [side]: "100%",
            transform,
        });
    }
    const referenceHidden = middlewareData.hide?.referenceHidden;
    const visibility = referenceHidden ? "hidden" : null;
    const pointerEvents = visibility ? "none" : null;
    floatingEl.setAttribute(placementDataAttribute, effectivePlacement);
    const { open } = component;
    Object.assign(floatingEl.style, {
        visibility,
        pointerEvents,
        position,
        transform: open ? `translate(${roundByDPR(x)}px,${roundByDPR(y)}px)` : "",
        top: 0,
        left: 0,
    });
};
/**
 * Exported for testing purposes only
 */
const placementDataAttribute = "data-placement";
const flipPlacements = [
    "top",
    "bottom",
    "right",
    "left",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "right-start",
    "right-end",
    "left-start",
    "left-end",
    "leading",
    "trailing",
    "leading-start",
    "leading-end",
    "trailing-start",
    "trailing-end",
];
const defaultMenuPlacement = "bottom-start";
const defaultEndMenuPlacement = "bottom-end";
const FloatingCSS = {
    animation: "calcite-floating-ui-anim",
    animationActive: "calcite-floating-ui-anim--active",
    arrow: "calcite-floating-ui-arrow",
    arrowStroke: "calcite-floating-ui-arrow__stroke",
};
function getMiddleware({ placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type, }) {
    const defaultMiddleware = [shift(), hide()];
    if (type === "menu") {
        return [
            ...defaultMiddleware,
            flip({
                fallbackPlacements: flipPlacements || ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"],
            }),
        ];
    }
    if (type === "popover" || type === "tooltip") {
        const middleware = [
            ...defaultMiddleware,
            offset({
                mainAxis: typeof offsetDistance === "number" ? offsetDistance : 0,
                crossAxis: typeof offsetSkidding === "number" ? offsetSkidding : 0,
            }),
        ];
        if (placement === "auto" || placement === "auto-start" || placement === "auto-end") {
            middleware.push(autoPlacement({ alignment: placement === "auto-start" ? "start" : placement === "auto-end" ? "end" : null }));
        }
        else if (!flipDisabled) {
            middleware.push(flip(flipPlacements ? { fallbackPlacements: flipPlacements } : {}));
        }
        if (arrowEl) {
            middleware.push(arrow({
                element: arrowEl,
            }));
        }
        return middleware;
    }
    return [];
}
function filterValidFlipPlacements(placements, el) {
    const filteredPlacements = placements.filter((placement) => flipPlacements.includes(placement));
    if (filteredPlacements.length !== placements.length) {
        console.warn(`${el.tagName}: Invalid value found in: flipPlacements. Try any of these: ${flipPlacements
            .map((placement) => `"${placement}"`)
            .join(", ")
            .trim()}`, { el });
    }
    return filteredPlacements;
}
function getEffectivePlacement(placement, isRTL = false) {
    const placements = ["left", "right"];
    if (isRTL) {
        placements.reverse();
    }
    return placement.replace(/leading/gi, placements[0]).replace(/trailing/gi, placements[1]);
}
/**
 * Convenience function to manage `reposition` calls for FloatingUIComponents that use `positionFloatingUI.
 *
 * Note: this is not needed for components that use `calcite-popover`.
 *
 * @param component - A floating-ui component.
 * @param options - Reposition parameters.
 * @param options.referenceEl - The `referenceElement` used to position the component according to its `placement` value.
 * @param options.floatingEl - The `floatingElement` containing the floating ui.
 * @param options.overlayPositioning - type of positioning to use for the overlaid content.
 * @param options.placement - Determines where the component will be positioned relative to the `referenceElement`.
 * @param options.flipDisabled - Prevents flipping the component's placement when overlapping its `referenceElement`.
 * @param options.flipPlacements - Defines the available placements that can be used when a flip occurs.
 * @param options.offsetDistance - Offsets the position of the popover away from the `referenceElement`.
 * @param options.offsetSkidding - Offsets the position of the component along the `referenceElement`.
 * @param options.arrowEl - A customizable arrow element.
 * @param options.type - The type of floating UI.
 * @param delayed - Reposition the component after a delay.
 * @returns {Promise<void>}
 */
async function reposition(component, options, delayed = false) {
    if (!component.open || !options.floatingEl || !options.referenceEl) {
        return;
    }
    const trackedState = autoUpdatingComponentMap.get(component);
    if (!trackedState) {
        return runAutoUpdate(component, options.referenceEl, options.floatingEl);
    }
    const positionFunction = delayed ? getDebouncedReposition(component) : positionFloatingUI;
    await positionFunction(component, options);
}
function getDebouncedReposition(component) {
    let debounced = componentToDebouncedRepositionMap.get(component);
    if (debounced) {
        return debounced;
    }
    debounced = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_3__.d)(positionFloatingUI, _resources_js__WEBPACK_IMPORTED_MODULE_0__.D.reposition, {
        leading: true,
        maxWait: _resources_js__WEBPACK_IMPORTED_MODULE_0__.D.reposition,
    });
    componentToDebouncedRepositionMap.set(component, debounced);
    return debounced;
}
const ARROW_CSS_TRANSFORM = {
    top: "",
    left: "rotate(-90deg)",
    bottom: "rotate(180deg)",
    right: "rotate(90deg)",
};
/**
 * Exported for testing purposes only
 *
 * @internal
 */
const autoUpdatingComponentMap = new WeakMap();
const componentToDebouncedRepositionMap = new WeakMap();
async function runAutoUpdate(component, referenceEl, floatingEl) {
    if (!floatingEl.isConnected) {
        return;
    }
    const effectiveAutoUpdate = (0,_browser_js__WEBPACK_IMPORTED_MODULE_2__.i)()
        ? autoUpdate
        : (_refEl, _floatingEl, updateCallback) => {
            updateCallback();
            return () => {
                /* noop */
            };
        };
    // we set initial state here to make it available for `reposition` calls
    autoUpdatingComponentMap.set(component, { state: "pending" });
    let repositionPromise;
    const cleanUp = effectiveAutoUpdate(referenceEl, floatingEl, 
    // callback is invoked immediately
    () => {
        const promise = component.reposition();
        if (!repositionPromise) {
            repositionPromise = promise;
        }
    });
    autoUpdatingComponentMap.set(component, { state: "active", cleanUp });
    return repositionPromise;
}
/**
 * Helper to set up floating element interactions on connectedCallback.
 *
 * @param component - A floating-ui component.
 * @param referenceEl - The `referenceElement` used to position the component according to its `placement` value.
 * @param floatingEl - The `floatingElement` containing the floating ui.
 */
async function connectFloatingUI(component, referenceEl, floatingEl) {
    if (!floatingEl || !referenceEl) {
        return;
    }
    disconnectFloatingUI(component, referenceEl, floatingEl);
    Object.assign(floatingEl.style, {
        visibility: "hidden",
        pointerEvents: "none",
        // initial positioning based on https://floating-ui.com/docs/computePosition#initial-layout
        position: component.overlayPositioning,
    });
    if (!component.open) {
        return;
    }
    return runAutoUpdate(component, referenceEl, floatingEl);
}
/**
 * Helper to tear down floating element interactions on disconnectedCallback.
 *
 * @param component - A floating-ui component.
 * @param referenceEl - The `referenceElement` used to position the component according to its `placement` value.
 * @param floatingEl - The `floatingElement` containing the floating ui.
 */
function disconnectFloatingUI(component, referenceEl, floatingEl) {
    if (!floatingEl || !referenceEl) {
        return;
    }
    const trackedState = autoUpdatingComponentMap.get(component);
    if (trackedState?.state === "active") {
        trackedState.cleanUp();
    }
    autoUpdatingComponentMap.delete(component);
    componentToDebouncedRepositionMap.get(component)?.cancel();
    componentToDebouncedRepositionMap.delete(component);
}
const visiblePointerSize = 4;
/**
 * Default offset the position of the floating element away from the reference element.
 *
 * @default 6
 */
const defaultOffsetDistance = Math.ceil(Math.hypot(visiblePointerSize, visiblePointerSize));



//# sourceMappingURL=floating-ui.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ activateFocusTrap; },
/* harmony export */   c: function() { return /* binding */ connectFocusTrap; },
/* harmony export */   d: function() { return /* binding */ deactivateFocusTrap; },
/* harmony export */   u: function() { return /* binding */ updateFocusTrapElements; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "./node_modules/@esri/calcite-components/dist/components/config.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */



/*!
* focus-trap 7.6.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap.pause();
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      // move this existing trap to the front of the queue
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0) {
      trapStack[trapStack.length - 1].unpause();
    }
  }
};
var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Escape' || (e === null || e === void 0 ? void 0 : e.key) === 'Esc' || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Tab' || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};

// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
  return isTabEvent(e) && !e.shiftKey;
};

// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

// Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs
var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }
    return true; // next
  });
  return idx;
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */
var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */
  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event] If available, and `element` isn't directly found in any container,
   *  the event's composed path is used to see if includes any known trap containers in the
   *  case where the element is inside a Shadow DOM.
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || ( // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */
  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = undefined; // use default value
    }
    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      }
      // else, empty string (invalid), null (invalid), 0 (invalid)

      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus');

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined || !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.j)(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes since nodes with negative `tabindex` attributes
      //  are focusable but not tabbable
      var focusableNodes = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.k)(container, config.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : undefined;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : undefined;
      var firstDomTabbableNode = focusableNodes.find(function (node) {
        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.l)(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function (node) {
        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.l)(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function (node) {
        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.m)(node) > 0;
      });
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            // either not tabbable nor focusable, or was focused but not tabbable (negative tabindex):
            //  since `node` should at least have been focusable, we assume that's the case and mimic
            //  what browsers do, which is set focus to the next node in __document position order__,
            //  regardless of positive tabindexes, if any -- and for reasons explained in the NOTE
            //  above related to `firstDomTabbable` and `lastDomTabbable` properties, we fall back to
            //  basic DOM order
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function (el) {
                return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.l)(el);
              });
            }
            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function (el) {
              return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.l)(el);
            });
          }
          return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }

    // NOTE: Positive tabindexes are only properly supported in single-container traps because
    //  doing it across multiple containers where tabindexes could be all over the place
    //  would require Tabbable to support multiple containers, would require additional
    //  specialized Shadow DOM support, and would require Tabbable's multi-container support
    //  to look at those containers in document position order rather than user-provided
    //  order (as they are treated in Focus-trap, for legacy reasons). See discussion on
    //  https://github.com/focus-trap/focus-trap/issues/375 for more details.
    if (state.containerGroups.find(function (g) {
      return g.posTabIndexesFound;
    }) && state.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };

  /**
   * Gets the current activeElement. If it's a web-component and has open shadow-root
   * it will recursively search inside shadow roots for the "true" activeElement.
   *
   * @param {Document | ShadowRoot} el
   *
   * @returns {HTMLElement} The element that currently has the focus
   **/
  var _getActiveElement = function getActiveElement(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return _getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var _tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === _getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      _tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    // NOTE: focus() API does not trigger focusIn event so set MRU node manually
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };

  /**
   * Finds the next node (in either direction) where focus should move according to a
   *  keyboard focus-in event.
   * @param {Object} params
   * @param {Node} [params.target] Known target __from which__ to navigate, if any.
   * @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
   *  will be used to determine the `target`). Ignored if `target` is specified.
   * @param {boolean} [params.isBackward] True if focus should move backward.
   * @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
   *  determined given the current state of the trap.
   */
  var findNextNavNode = function findNextNavNode(_ref2) {
    var target = _ref2.target,
      event = _ref2.event,
      _ref2$isBackward = _ref2.isBackward,
      isBackward = _ref2$isBackward === void 0 ? false : _ref2$isBackward;
    target = target || getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var firstTabbableNode = _ref3.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)(target, config.tabbableOptions) && !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.l)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.m)(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        // FORWARD

        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref4) {
          var lastTabbableNode = _ref4.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)(target, config.tabbableOptions) && !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.l)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.m)(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    return destinationNode;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  // NOTE: the focusIn event is NOT cancelable, so if focus escapes, it may cause unexpected
  //  scrolling if the node that got focused was out of view; there's nothing we can do to
  //  prevent that from happening by the time we discover that focus escaped
  var checkFocusIn = function checkFocusIn(event) {
    var target = getActualTarget(event);
    var targetContained = findContainerIndex(target, event) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      event.stopImmediatePropagation();

      // focus will escape if the MRU node had a positive tab index and user tried to nav forward;
      //  it will also escape if the MRU node had a 0 tab index and user tried to nav backward
      //  toward a node with a positive tab index
      var nextNode; // next node to focus, if we find one
      var navAcrossContainers = true;
      if (state.mostRecentlyFocusedNode) {
        if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.m)(state.mostRecentlyFocusedNode) > 0) {
          // MRU container index must be >=0 otherwise we wouldn't have it as an MRU node...
          var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
          // there MAY not be any tabbable nodes in the container if there are at least 2 containers
          //  and the MRU node is focusable but not tabbable (focus-trap requires at least 1 container
          //  with at least one tabbable node in order to function, so this could be the other container
          //  with nothing tabbable in it)
          var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            // MRU tab index MAY not be found if the MRU node is focusable but not tabbable
            var mruTabIdx = tabbableNodes.findIndex(function (node) {
              return node === state.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config.isKeyForward(state.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              }
              // else, don't find in container order without considering direction too
            }
          }
          // else, no tabbable nodes in that container (which means we must have at least one other
          //  container with at least one tabbable node in it, otherwise focus-trap would've thrown
          //  an error the last time updateTabbableNodes() was run): find next node among all known
          //  containers
        } else {
          // check to see if there's at least one tabbable node with a positive tab index inside
          //  the trap because focus seems to escape when navigating backward from a tabbable node
          //  with tabindex=0 when this is the case (instead of wrapping to the tabbable node with
          //  the greatest positive tab index like it should)
          if (!state.containerGroups.some(function (g) {
            return g.tabbableNodes.some(function (n) {
              return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.m)(n) > 0;
            });
          })) {
            // no containers with tabbable nodes with positive tab indexes which means the focus
            //  escaped for some other reason and we should just execute the fallback to the
            //  MRU node or initial focus node, if any
            navAcrossContainers = false;
          }
        }
      } else {
        // no MRU node means we're likely in some initial condition when the trap has just
        //  been activated and initial focus hasn't been given yet, in which case we should
        //  fall through to trying to focus the initial focus node, which is what should
        //  happen below at this point in the logic
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state.mostRecentlyFocusedNode,
          isBackward: config.isKeyBackward(state.recentNavEvent)
        });
      }
      if (nextNode) {
        _tryFocus(nextNode);
      } else {
        _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state.recentNavEvent = undefined; // clear
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    state.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event: event,
      isBackward: isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefault();
      }
      _tryFocus(destinationNode);
    }
    // else, let the browser take care of [shift+]tab and move the focus
  };
  var checkTabKey = function checkTabKey(event) {
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };

  // we use a different event phase for the Escape key to allow canceling the event and checking for this in escapeDeactivates
  var checkEscapeKey = function checkEscapeKey(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  //
  // EVENT LISTENERS
  //

  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    }

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trapStack, trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      _tryFocus(getInitialFocusNode());
    }) : _tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkTabKey, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkEscapeKey);
    return trap;
  };
  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkTabKey, true);
    doc.removeEventListener('keydown', checkEscapeKey);
    return trap;
  };

  //
  // MUTATION OBSERVER
  //

  var checkDomRemoval = function checkDomRemoval(mutations) {
    var isFocusedNodeRemoved = mutations.some(function (mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      _tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      onActivate === null || onActivate === void 0 || onActivate();
      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 || onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (state.paused || !state.active) {
        return this;
      }
      var onPause = getOption(pauseOptions, 'onPause');
      var onPostPause = getOption(pauseOptions, 'onPostPause');
      state.paused = true;
      onPause === null || onPause === void 0 || onPause();
      removeListeners();
      updateObservedNodes();
      onPostPause === null || onPostPause === void 0 || onPostPause();
      return this;
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.paused || !state.active) {
        return this;
      }
      var onUnpause = getOption(unpauseOptions, 'onUnpause');
      var onPostUnpause = getOption(unpauseOptions, 'onPostUnpause');
      state.paused = false;
      onUnpause === null || onUnpause === void 0 || onUnpause();
      updateTabbableNodes();
      addListeners();
      updateObservedNodes();
      onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};

/**
 * Helper to set up the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param options
 */
function connectFocusTrap(component, options) {
    const { el } = component;
    const focusTrapNode = options?.focusTrapEl || el;
    if (!focusTrapNode) {
        return;
    }
    const focusTrapOptions = {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        fallbackFocus: focusTrapNode,
        setReturnFocus: (el) => {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.e)(el);
            return false;
        },
        ...options?.focusTrapOptions,
        // the following options are not overridable
        document: el.ownerDocument,
        tabbableOptions: _dom_js__WEBPACK_IMPORTED_MODULE_0__.n,
        trapStack: _config_js__WEBPACK_IMPORTED_MODULE_1__.f,
    };
    component.focusTrap = createFocusTrap(focusTrapNode, focusTrapOptions);
}
/**
 * Helper to activate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap activate options.
 */
function activateFocusTrap(component, options) {
    if (!component.focusTrapDisabled) {
        component.focusTrap?.activate(options);
    }
}
/**
 * Helper to deactivate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap deactivate options.
 */
function deactivateFocusTrap(component, options) {
    component.focusTrap?.deactivate(options);
}
/**
 * Helper to update the element(s) that are used within the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @example
 * const modal = document.querySelector("calcite-modal");
 * const input = document.createElement("calcite-input");
 * content.appendChild(input);
 * await input.componentOnReady();
 * await modal.updateFocusTrapElements();
 * requestAnimationFrame(() => input.setFocus());
 */
function updateFocusTrapElements(component) {
    component.focusTrap?.updateContainerElements(component.el);
}



//# sourceMappingURL=focusTrapComponent.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/loader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loader.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: function() { return /* binding */ Loader; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */




const CSS = {
    loader: "loader",
    loaderParts: "loader__svgs",
    loaderPart: "loader__svg",
    loaderPartId: (partId) => `${CSS.loaderPart}--${partId}`,
    loaderText: "loader__text",
    loaderPercentage: "loader__percentage",
};

const loaderCss = "@charset \"UTF-8\";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--3);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem;--calcite-internal-loader-value-line-height:0.625rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem;--calcite-internal-loader-value-line-height:1.375rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem;--calcite-internal-loader-value-line-height:1.71875rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);line-height:var(--calcite-internal-loader-value-line-height);align-self:center}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise;display:flex}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type=determinate]),:host([type=determinate-value]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs,:host([type=determinate-value]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3,:host([type=determinate-value]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteLoaderStyle0 = loaderCss;

const Loader = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class Loader extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.formatValue = () => {
            if (this.type !== "determinate-value") {
                return `${this.value}`;
            }
            return this.formatter.format(this.value / 100);
        };
        this.complete = false;
        this.inline = false;
        this.label = undefined;
        this.scale = "m";
        this.type = "indeterminate";
        this.value = 0;
        this.text = "";
        this.effectiveLocale = "";
    }
    valueChangeHandler() {
        this.complete = this.type.startsWith("determinate") && this.value === 100;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
        this.updateFormatter();
    }
    disconnectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    }
    componentWillLoad() {
        requestAnimationFrame(() => this.valueChangeHandler());
    }
    render() {
        const { el, inline, label, scale, text, type, value } = this;
        const id = el.id || (0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)();
        const radiusRatio = 0.45;
        const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
        const radius = size * radiusRatio;
        const viewbox = `0 0 ${size} ${size}`;
        const isDeterminate = type.startsWith("determinate");
        const circumference = 2 * radius * Math.PI;
        const progress = (value / 100) * circumference;
        const remaining = circumference - progress;
        const valueNow = Math.floor(value);
        const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.Host, { key: '8272bdfae9fff51b19ed8fa66197eb93b53feb4c', "aria-label": label, "aria-valuemax": isDeterminate ? "100" : undefined, "aria-valuemin": isDeterminate ? "0" : undefined, "aria-valuenow": isDeterminate ? valueNow.toString() : undefined, id: id, role: "progressbar" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { key: '3d410c178af39bb57cc478bdd06c0392f6ba71a3', class: CSS.loaderParts }, [1, 2, 3].map((index) => ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("svg", { "aria-hidden": "true", class: {
                [CSS.loaderPart]: true,
                [CSS.loaderPartId(index)]: true,
            }, key: index, style: isDeterminate && index === 3 ? determinateStyle : undefined, viewBox: viewbox }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("circle", { cx: size / 2, cy: size / 2, r: radius })))), isDeterminate && (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { key: '4ccc633930dee031bf769908d712df39e0677bbb', class: CSS.loaderPercentage }, this.formatValue())), text && (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { key: '6d0d51988bdfafee2a19faed9e14d3bda06d79b5', class: CSS.loaderText }, text)));
    }
    formatterPropsChange() {
        this.updateFormatter();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Return the proper sizes based on the scale property
     *
     * @param scale
     */
    getSize(scale) {
        return {
            s: 32,
            m: 56,
            l: 80,
        }[scale];
    }
    getInlineSize(scale) {
        return {
            s: 12,
            m: 16,
            l: 20,
        }[scale];
    }
    updateFormatter() {
        if (this.type !== "determinate-value" ||
            this.formatter?.resolvedOptions().locale === this.effectiveLocale) {
            return;
        }
        this.formatter = new Intl.NumberFormat(this.effectiveLocale, {
            style: "percent",
        });
    }
    get el() { return this; }
    static get watchers() { return {
        "value": ["valueChangeHandler"],
        "effectiveLocale": ["formatterPropsChange"],
        "type": ["formatterPropsChange"]
    }; }
    static get style() { return CalciteLoaderStyle0; }
}, [1, "calcite-loader", {
        "complete": [1540],
        "inline": [516],
        "label": [1],
        "scale": [513],
        "type": [513],
        "value": [2],
        "text": [1],
        "effectiveLocale": [32]
    }, undefined, {
        "value": ["valueChangeHandler"],
        "effectiveLocale": ["formatterPropsChange"],
        "type": ["formatterPropsChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Loader);
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=loader.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ onToggleOpenCloseComponent; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */



/**
 * Exported for testing purposes only
 */
const internalReadTask = _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_1__.readTask;
function isOpen(component) {
    return "opened" in component ? component.opened : component.open;
}
/**
 * Helper to determine globally set transition duration on the given openTransitionProp, which is imported and set in the @Watch("open").
 * Used to emit (before)open/close events both for when the opacity transition is present and when there is none (transition-duration is set to 0).
 *
 * @example
 * import { onToggleOpenCloseComponent, OpenCloseComponent } from "../../utils/openCloseComponent";
 *
 * async componentWillLoad() {
 * // When component initially renders, if `open` was set we need to trigger on load as watcher doesn't fire.
 * if (this.open) {
 *    onToggleOpenCloseComponent(this);
 * }
 * @Watch("open")
 * async toggleModal(value: boolean): Promise<void> {
 *    onToggleOpenCloseComponent(this);
 * }
 *
 * @param component - OpenCloseComponent uses `open` prop to emit (before)open/close.
 */
function onToggleOpenCloseComponent(component) {
    internalReadTask(() => {
        if (!component.transitionEl) {
            return;
        }
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.w)(component.transitionEl, component.openTransitionProp, () => {
            if (isOpen(component)) {
                component.onBeforeOpen();
            }
            else {
                component.onBeforeClose();
            }
        }, () => {
            if (isOpen(component)) {
                component.onOpen();
            }
            else {
                component.onClose();
            }
        });
    });
}



//# sourceMappingURL=openCloseComponent.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/panel.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/panel.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: function() { return /* binding */ Panel; },
/* harmony export */   S: function() { return /* binding */ SLOTS; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _action_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-menu.js */ "./node_modules/@esri/calcite-components/dist/components/action-menu.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/* harmony import */ var _popover_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popover.js */ "./node_modules/@esri/calcite-components/dist/components/popover.js");
/* harmony import */ var _scrim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scrim.js */ "./node_modules/@esri/calcite-components/dist/components/scrim.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
















const CSS = {
    actionBarContainer: "action-bar-container",
    backButton: "back-button",
    container: "container",
    contentBottom: "content-bottom",
    contentTop: "content-top",
    header: "header",
    headerContainer: "header-container",
    headerContainerBorderEnd: "header-container--border-end",
    heading: "heading",
    summary: "summary",
    description: "description",
    headerContent: "header-content",
    headerActions: "header-actions",
    headerActionsEnd: "header-actions--end",
    headerActionsStart: "header-actions--start",
    contentWrapper: "content-wrapper",
    fabContainer: "fab-container",
    footer: "footer",
    footerContent: "footer-content",
    footerActions: "footer-actions",
    footerStart: "footer-start",
    footerEnd: "footer-end",
};
const IDS = {
    close: "close",
    collapse: "collapse",
};
const ICONS = {
    close: "x",
    menu: "ellipsis",
    backLeft: "chevron-left",
    backRight: "chevron-right",
    expand: "chevron-down",
    collapse: "chevron-up",
};
const SLOTS = {
    actionBar: "action-bar",
    alerts: "alerts",
    contentBottom: "content-bottom",
    contentTop: "content-top",
    headerActionsStart: "header-actions-start",
    headerActionsEnd: "header-actions-end",
    headerMenuActions: "header-menu-actions",
    headerContent: "header-content",
    fab: "fab",
    footer: "footer",
    footerEnd: "footer-end",
    footerStart: "footer-start",
    footerActions: "footer-actions",
};

const panelCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0);line-height:1.25rem}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;outline-color:transparent;padding:var(--calcite-panel-content-space, 0);background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{flex:1 1 auto;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}";
const CalcitePanelStyle0 = panelCss;

const Panel = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.proxyCustomElement)(class Panel extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calcitePanelClose = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calcitePanelClose", 6);
        this.calcitePanelToggle = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calcitePanelToggle", 6);
        this.calcitePanelScroll = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.createEvent)(this, "calcitePanelScroll", 6);
        this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => this.resizeHandler());
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.resizeHandler = () => {
            const { panelScrollEl } = this;
            if (!panelScrollEl ||
                typeof panelScrollEl.scrollHeight !== "number" ||
                typeof panelScrollEl.offsetHeight !== "number") {
                return;
            }
            const hasScrollingContent = panelScrollEl.scrollHeight > panelScrollEl.offsetHeight;
            // intentionally using setAttribute to avoid reflecting -1 so default browser behavior will occur
            if (hasScrollingContent) {
                panelScrollEl.setAttribute("tabindex", "0");
            }
            else {
                panelScrollEl.removeAttribute("tabindex");
            }
        };
        this.setContainerRef = (node) => {
            this.containerEl = node;
        };
        this.panelKeyDownHandler = (event) => {
            if (this.closable && event.key === "Escape" && !event.defaultPrevented) {
                this.handleUserClose();
                event.preventDefault();
            }
        };
        this.handleUserClose = () => {
            this.closed = true;
            this.calcitePanelClose.emit();
        };
        this.open = () => {
            this.isClosed = false;
        };
        this.close = async () => {
            const beforeClose = this.beforeClose ?? (() => Promise.resolve());
            try {
                await beforeClose();
            }
            catch (_error) {
                // close prevented
                requestAnimationFrame(() => {
                    this.closed = false;
                });
                return;
            }
            this.isClosed = true;
        };
        this.collapse = () => {
            this.collapsed = !this.collapsed;
            this.calcitePanelToggle.emit();
        };
        this.panelScrollHandler = () => {
            this.calcitePanelScroll.emit();
        };
        this.handleHeaderActionsStartSlotChange = (event) => {
            this.hasStartActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleHeaderActionsEndSlotChange = (event) => {
            this.hasEndActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleHeaderMenuActionsSlotChange = (event) => {
            this.hasMenuItems = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleActionBarSlotChange = (event) => {
            const actionBars = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.s)(event).filter((el) => el?.matches("calcite-action-bar"));
            actionBars.forEach((actionBar) => (actionBar.layout = "horizontal"));
            this.hasActionBar = !!actionBars.length;
        };
        this.handleHeaderContentSlotChange = (event) => {
            this.hasHeaderContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleFabSlotChange = (event) => {
            this.hasFab = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleFooterActionsSlotChange = (event) => {
            this.hasFooterActions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleFooterEndSlotChange = (event) => {
            this.hasFooterEndContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleFooterStartSlotChange = (event) => {
            this.hasFooterStartContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleFooterSlotChange = (event) => {
            this.hasFooterContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.contentBottomSlotChangeHandler = (event) => {
            this.hasContentBottom = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.contentTopSlotChangeHandler = (event) => {
            this.hasContentTop = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.setPanelScrollEl = (el) => {
            this.panelScrollEl = el;
            this.resizeObserver?.disconnect();
            if (el) {
                this.resizeObserver?.observe(el);
                this.resizeHandler();
            }
        };
        this.handleAlertsSlotChange = (event) => {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.s)(event)?.map((el) => {
                if (el.nodeName === "CALCITE-ALERT") {
                    el.embedded = true;
                }
            });
        };
        this.beforeClose = undefined;
        this.closed = false;
        this.disabled = false;
        this.closable = false;
        this.collapsed = false;
        this.collapseDirection = "down";
        this.collapsible = false;
        this.headingLevel = undefined;
        this.loading = false;
        this.heading = undefined;
        this.description = undefined;
        this.menuFlipPlacements = undefined;
        this.menuOpen = false;
        this.menuPlacement = _floating_ui_js__WEBPACK_IMPORTED_MODULE_8__.b;
        this.messageOverrides = undefined;
        this.messages = undefined;
        this.overlayPositioning = "absolute";
        this.scale = "m";
        this.isClosed = false;
        this.hasStartActions = false;
        this.hasEndActions = false;
        this.hasMenuItems = false;
        this.hasHeaderContent = false;
        this.hasActionBar = false;
        this.hasContentBottom = false;
        this.hasContentTop = false;
        this.hasFab = false;
        this.hasFooterActions = false;
        this.hasFooterContent = false;
        this.hasFooterEndContent = false;
        this.hasFooterStartContent = false;
        this.defaultMessages = undefined;
        this.effectiveLocale = "";
        this.showHeaderContent = false;
    }
    toggleDialog(value) {
        value ? this.close() : this.open();
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    }
    async componentWillLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
        this.isClosed = this.closed;
        await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    }
    componentDidLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    }
    componentDidRender() {
        (0,_interactive_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
    }
    disconnectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
        this.resizeObserver?.disconnect();
    }
    effectiveLocaleChange() {
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
    }
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    /**
     * Sets focus on the component's first focusable element.
     */
    async setFocus() {
        await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.containerEl);
    }
    /**
     * Scrolls the component's content to a specified set of coordinates.
     *
     * @example
     * myCalciteFlowItem.scrollContentTo({
     *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
     *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
     *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
     * });
     * @param options - allows specific coordinates to be defined.
     * @returns - promise that resolves once the content is scrolled to.
     */
    async scrollContentTo(options) {
        this.panelScrollEl?.scrollTo(options);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderHeaderContent() {
        const { heading, headingLevel, description, hasHeaderContent } = this;
        const headingNode = heading ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_5__.H, { class: CSS.heading, level: headingLevel }, heading)) : null;
        const descriptionNode = description ? (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("span", { class: CSS.description }, description) : null;
        return !hasHeaderContent && (headingNode || descriptionNode) ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.headerContent, key: "header-content" }, headingNode, descriptionNode)) : null;
    }
    renderActionBar() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.actionBarContainer, hidden: !this.hasActionBar }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.actionBar, onSlotchange: this.handleActionBarSlotChange })));
    }
    renderHeaderSlottedContent() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.headerContent, onSlotchange: this.handleHeaderContentSlotChange })));
    }
    renderHeaderStartActions() {
        const { hasStartActions } = this;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: { [CSS.headerActionsStart]: true, [CSS.headerActions]: true }, hidden: !hasStartActions, key: "header-actions-start" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange })));
    }
    renderHeaderActionsEnd() {
        const { hasEndActions, messages, closable, collapsed, collapseDirection, collapsible, hasMenuItems, } = this;
        const { collapse, expand, close } = messages;
        const icons = [ICONS.expand, ICONS.collapse];
        if (collapseDirection === "up") {
            icons.reverse();
        }
        const collapseNode = collapsible ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-action", { "aria-expanded": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!collapsed), "aria-label": collapse, icon: collapsed ? icons[0] : icons[1], id: IDS.collapse, onClick: this.collapse, scale: this.scale, text: collapse, title: collapsed ? expand : collapse })) : null;
        const closeNode = closable ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-action", { "aria-label": close, icon: ICONS.close, id: IDS.close, onClick: this.handleUserClose, scale: this.scale, text: close, title: close })) : null;
        const slotNode = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }));
        const showContainer = hasEndActions || collapseNode || closeNode || hasMenuItems;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: { [CSS.headerActionsEnd]: true, [CSS.headerActions]: true }, hidden: !showContainer, key: "header-actions-end" }, slotNode, this.renderMenu(), collapseNode, closeNode));
    }
    renderMenu() {
        const { hasMenuItems, messages, menuOpen, menuFlipPlacements, menuPlacement } = this;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-action-menu", { flipPlacements: menuFlipPlacements ?? ["top", "bottom"], hidden: !hasMenuItems, key: "menu", label: messages.options, open: menuOpen, overlayPositioning: this.overlayPositioning, placement: menuPlacement }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-action", { icon: ICONS.menu, scale: this.scale, slot: _action_menu_js__WEBPACK_IMPORTED_MODULE_4__.S.trigger, text: messages.options }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange })));
    }
    renderHeaderNode() {
        const { hasHeaderContent, hasStartActions, hasEndActions, closable, collapsible, hasMenuItems, hasActionBar, } = this;
        const headerContentNode = this.renderHeaderContent();
        const showHeaderContent = hasHeaderContent ||
            !!headerContentNode ||
            hasStartActions ||
            hasEndActions ||
            collapsible ||
            closable ||
            hasMenuItems;
        this.showHeaderContent = showHeaderContent;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("header", { class: CSS.header, hidden: !(showHeaderContent || hasActionBar) }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: { [CSS.headerContainer]: true, [CSS.headerContainerBorderEnd]: hasActionBar }, hidden: !showHeaderContent }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), headerContentNode, this.renderHeaderActionsEnd()), this.renderActionBar(), this.renderContentTop()));
    }
    renderFooterNode() {
        const { hasFooterEndContent, hasFooterStartContent, hasFooterContent, hasFooterActions } = this;
        const showFooter = hasFooterStartContent || hasFooterEndContent || hasFooterContent || hasFooterActions;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("footer", { class: CSS.footer, hidden: !showFooter }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.footerContent, hidden: !hasFooterContent }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.footer, onSlotchange: this.handleFooterSlotChange })), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.footerStart, hidden: hasFooterContent || !hasFooterStartContent }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.footerStart, onSlotchange: this.handleFooterStartSlotChange })), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.footerEnd, hidden: hasFooterContent || !hasFooterEndContent }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.footerEnd, onSlotchange: this.handleFooterEndSlotChange })), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.footerActions, hidden: hasFooterContent || !hasFooterActions }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { key: "footer-actions-slot", name: SLOTS.footerActions, onSlotchange: this.handleFooterActionsSlotChange }))));
    }
    renderContent() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.contentWrapper, hidden: this.collapsible && this.collapsed, onScroll: this.panelScrollHandler, ref: this.setPanelScrollEl }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", null), this.renderFab()));
    }
    renderContentBottom() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.contentBottom, hidden: !this.hasContentBottom }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.contentBottom, onSlotchange: this.contentBottomSlotChangeHandler })));
    }
    renderContentTop() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.contentTop, hidden: !this.hasContentTop }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.contentTop, onSlotchange: this.contentTopSlotChangeHandler })));
    }
    renderFab() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("div", { class: CSS.fabContainer, hidden: !this.hasFab }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { name: SLOTS.fab, onSlotchange: this.handleFabSlotChange })));
    }
    render() {
        const { disabled, loading, isClosed } = this;
        const panelNode = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("article", { key: '0f439dffdca536eb6973ac386b0566091249aee3', "aria-busy": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(loading), class: CSS.container, hidden: isClosed, ref: this.setContainerRef }, this.renderHeaderNode(), this.renderContent(), this.renderContentBottom(), this.renderFooterNode(), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("slot", { key: "alerts", name: SLOTS.alerts, onSlotchange: this.handleAlertsSlotChange })));
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.Host, { key: '6e5baec07ecb356871dea038ebc2d5ee2d8ed54f', onKeyDown: this.panelKeyDownHandler }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)(_interactive_js__WEBPACK_IMPORTED_MODULE_1__.I, { key: '924cda1799b359f1bb3fb119cebfff5a7349b72d', disabled: disabled }, loading ? (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_14__.h)("calcite-scrim", { loading: loading }) : null, panelNode)));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "closed": ["toggleDialog"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalcitePanelStyle0; }
}, [1, "calcite-panel", {
        "beforeClose": [16],
        "closed": [1540],
        "disabled": [516],
        "closable": [516],
        "collapsed": [516],
        "collapseDirection": [1, "collapse-direction"],
        "collapsible": [516],
        "headingLevel": [514, "heading-level"],
        "loading": [516],
        "heading": [1],
        "description": [1],
        "menuFlipPlacements": [16],
        "menuOpen": [516, "menu-open"],
        "menuPlacement": [513, "menu-placement"],
        "messageOverrides": [1040],
        "messages": [1040],
        "overlayPositioning": [513, "overlay-positioning"],
        "scale": [513],
        "isClosed": [32],
        "hasStartActions": [32],
        "hasEndActions": [32],
        "hasMenuItems": [32],
        "hasHeaderContent": [32],
        "hasActionBar": [32],
        "hasContentBottom": [32],
        "hasContentTop": [32],
        "hasFab": [32],
        "hasFooterActions": [32],
        "hasFooterContent": [32],
        "hasFooterEndContent": [32],
        "hasFooterStartContent": [32],
        "defaultMessages": [32],
        "effectiveLocale": [32],
        "showHeaderContent": [32],
        "setFocus": [64],
        "scrollContentTo": [64]
    }, undefined, {
        "closed": ["toggleDialog"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-panel", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Panel);
            }
            break;
        case "calcite-action":
            if (!customElements.get(tagName)) {
                (0,_action_js__WEBPACK_IMPORTED_MODULE_9__.d)();
            }
            break;
        case "calcite-action-menu":
            if (!customElements.get(tagName)) {
                (0,_action_menu_js__WEBPACK_IMPORTED_MODULE_4__.d)();
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_10__.d)();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                (0,_loader_js__WEBPACK_IMPORTED_MODULE_11__.d)();
            }
            break;
        case "calcite-popover":
            if (!customElements.get(tagName)) {
                (0,_popover_js__WEBPACK_IMPORTED_MODULE_12__.d)();
            }
            break;
        case "calcite-scrim":
            if (!customElements.get(tagName)) {
                (0,_scrim_js__WEBPACK_IMPORTED_MODULE_13__.d)();
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=panel.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/popover.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/popover.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: function() { return /* binding */ Popover; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _floating_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floating-ui.js */ "./node_modules/@esri/calcite-components/dist/components/floating-ui.js");
/* harmony import */ var _focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusTrapComponent.js */ "./node_modules/@esri/calcite-components/dist/components/focusTrapComponent.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent.js */ "./node_modules/@esri/calcite-components/dist/components/openCloseComponent.js");
/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading.js */ "./node_modules/@esri/calcite-components/dist/components/Heading.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _FloatingArrow_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FloatingArrow.js */ "./node_modules/@esri/calcite-components/dist/components/FloatingArrow.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./action.js */ "./node_modules/@esri/calcite-components/dist/components/action.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


















class PopoverManager {
    constructor() {
        // --------------------------------------------------------------------------
        //
        //  Private Properties
        //
        // --------------------------------------------------------------------------
        this.registeredElements = new Map();
        this.registeredElementCount = 0;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.queryPopover = (composedPath) => {
            const { registeredElements } = this;
            const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
            return registeredElements.get(registeredElement);
        };
        this.togglePopovers = (event) => {
            const composedPath = event.composedPath();
            const togglePopover = this.queryPopover(composedPath);
            if (togglePopover && !togglePopover.triggerDisabled) {
                togglePopover.open = !togglePopover.open;
            }
            Array.from(this.registeredElements.values())
                .filter((popover) => popover !== togglePopover && popover.autoClose && popover.open && !composedPath.includes(popover))
                .forEach((popover) => (popover.open = false));
        };
        this.keyDownHandler = (event) => {
            if (event.defaultPrevented) {
                return;
            }
            if (event.key === "Escape") {
                this.closeAllPopovers();
            }
            else if ((0,_key_js__WEBPACK_IMPORTED_MODULE_12__.i)(event.key)) {
                this.togglePopovers(event);
            }
        };
        this.clickHandler = (event) => {
            if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.i)(event)) {
                return;
            }
            this.togglePopovers(event);
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    registerElement(referenceEl, popover) {
        this.registeredElementCount++;
        this.registeredElements.set(referenceEl, popover);
        if (this.registeredElementCount === 1) {
            this.addListeners();
        }
    }
    unregisterElement(referenceEl) {
        if (this.registeredElements.delete(referenceEl)) {
            this.registeredElementCount--;
        }
        if (this.registeredElementCount === 0) {
            this.removeListeners();
        }
    }
    closeAllPopovers() {
        Array.from(this.registeredElements.values()).forEach((popover) => (popover.open = false));
    }
    addListeners() {
        window.addEventListener("click", this.clickHandler);
        window.addEventListener("keydown", this.keyDownHandler);
    }
    removeListeners() {
        window.removeEventListener("click", this.clickHandler);
        window.removeEventListener("keydown", this.keyDownHandler);
    }
}

const CSS = {
    container: "container",
    imageContainer: "image-container",
    closeButtonContainer: "close-button-container",
    closeButton: "close-button",
    content: "content",
    hasHeader: "has-header",
    header: "header",
    headerContainer: "headerContainer",
    headerContent: "header-content",
    heading: "heading",
};
const defaultPopoverPlacement = "auto";
const ARIA_CONTROLS = "aria-controls";
const ARIA_EXPANDED = "aria-expanded";

const popoverCss = ":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}";
const CalcitePopoverStyle0 = popoverCss;

const manager = new PopoverManager();
const Popover = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.proxyCustomElement)(class Popover extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calcitePopoverBeforeClose = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calcitePopoverBeforeClose", 6);
        this.calcitePopoverClose = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calcitePopoverClose", 6);
        this.calcitePopoverBeforeOpen = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calcitePopoverBeforeOpen", 6);
        this.calcitePopoverOpen = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calcitePopoverOpen", 6);
        this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_9__.c)("mutation", () => this.updateFocusTrapElements());
        this.guid = `calcite-popover-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
        this.openTransitionProp = "opacity";
        this.hasLoaded = false;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.setTransitionEl = (el) => {
            this.transitionEl = el;
        };
        this.setFilteredPlacements = () => {
            const { el, flipPlacements } = this;
            this.filteredFlipPlacements = flipPlacements
                ? (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.f)(flipPlacements, el)
                : null;
        };
        this.setUpReferenceElement = (warn = true) => {
            this.removeReferences();
            this.effectiveReferenceElement = this.getReferenceElement();
            (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, this.effectiveReferenceElement, this.el);
            const { el, referenceElement, effectiveReferenceElement } = this;
            if (warn && referenceElement && !effectiveReferenceElement) {
                console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
                    el,
                });
            }
            this.addReferences();
        };
        this.getId = () => {
            return this.el.id || this.guid;
        };
        this.setExpandedAttr = () => {
            const { effectiveReferenceElement, open } = this;
            if (!effectiveReferenceElement) {
                return;
            }
            if ("setAttribute" in effectiveReferenceElement) {
                effectiveReferenceElement.setAttribute(ARIA_EXPANDED, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.t)(open));
            }
        };
        this.addReferences = () => {
            const { effectiveReferenceElement } = this;
            if (!effectiveReferenceElement) {
                return;
            }
            const id = this.getId();
            if ("setAttribute" in effectiveReferenceElement) {
                effectiveReferenceElement.setAttribute(ARIA_CONTROLS, id);
            }
            manager.registerElement(effectiveReferenceElement, this.el);
            this.setExpandedAttr();
        };
        this.removeReferences = () => {
            const { effectiveReferenceElement } = this;
            if (!effectiveReferenceElement) {
                return;
            }
            if ("removeAttribute" in effectiveReferenceElement) {
                effectiveReferenceElement.removeAttribute(ARIA_CONTROLS);
                effectiveReferenceElement.removeAttribute(ARIA_EXPANDED);
            }
            manager.unregisterElement(effectiveReferenceElement);
        };
        this.hide = () => {
            this.open = false;
        };
        this.storeArrowEl = (el) => {
            this.arrowEl = el;
            this.reposition(true);
        };
        this.autoClose = false;
        this.closable = false;
        this.flipDisabled = false;
        this.focusTrapDisabled = false;
        this.pointerDisabled = false;
        this.flipPlacements = undefined;
        this.heading = undefined;
        this.headingLevel = undefined;
        this.label = undefined;
        this.messageOverrides = undefined;
        this.messages = undefined;
        this.offsetDistance = _floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.d;
        this.offsetSkidding = 0;
        this.open = false;
        this.overlayPositioning = "absolute";
        this.placement = defaultPopoverPlacement;
        this.referenceElement = undefined;
        this.scale = "m";
        this.triggerDisabled = false;
        this.effectiveLocale = "";
        this.floatingLayout = "vertical";
        this.effectiveReferenceElement = undefined;
        this.defaultMessages = undefined;
    }
    handleFocusTrapDisabled(focusTrapDisabled) {
        if (!this.open) {
            return;
        }
        focusTrapDisabled ? (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this) : (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    }
    flipPlacementsHandler() {
        this.setFilteredPlacements();
        this.reposition(true);
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    offsetDistanceOffsetHandler() {
        this.reposition(true);
    }
    offsetSkiddingHandler() {
        this.reposition(true);
    }
    openHandler() {
        (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.o)(this);
        this.reposition(true);
        this.setExpandedAttr();
    }
    overlayPositioningHandler() {
        this.reposition(true);
    }
    placementHandler() {
        this.reposition(true);
    }
    referenceElementHandler() {
        this.setUpReferenceElement();
        this.reposition(true);
    }
    effectiveLocaleChange() {
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
        this.setFilteredPlacements();
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
        (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
        // we set up the ref element in the next frame to ensure PopoverManager
        // event handlers are invoked after connect (mainly for `components` output target)
        requestAnimationFrame(() => this.setUpReferenceElement(this.hasLoaded));
    }
    async componentWillLoad() {
        await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    }
    componentDidLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
        if (this.referenceElement && !this.effectiveReferenceElement) {
            this.setUpReferenceElement();
        }
        if (this.open) {
            (0,_openCloseComponent_js__WEBPACK_IMPORTED_MODULE_4__.o)(this);
        }
        this.hasLoaded = true;
    }
    disconnectedCallback() {
        this.mutationObserver?.disconnect();
        this.removeReferences();
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
        (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, this.effectiveReferenceElement, this.el);
        (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /**
     * Updates the position of the component.
     *
     * @param delayed
     */
    async reposition(delayed = false) {
        const { el, effectiveReferenceElement, placement, overlayPositioning, flipDisabled, filteredFlipPlacements, offsetDistance, offsetSkidding, arrowEl, } = this;
        return (0,_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, {
            floatingEl: el,
            referenceEl: effectiveReferenceElement,
            overlayPositioning,
            placement,
            flipDisabled,
            flipPlacements: filteredFlipPlacements,
            offsetDistance,
            offsetSkidding,
            arrowEl,
            type: "popover",
        }, delayed);
    }
    /**
     * Sets focus on the component's first focusable element.
     */
    async setFocus() {
        await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
        (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.forceUpdate)(this.el);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.el);
    }
    /**
     * Updates the element(s) that are used within the focus-trap of the component.
     */
    async updateFocusTrapElements() {
        (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
    }
    getReferenceElement() {
        const { referenceElement, el } = this;
        return ((typeof referenceElement === "string"
            ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.q)(el, { id: referenceElement })
            : referenceElement) || null);
    }
    onBeforeOpen() {
        this.calcitePopoverBeforeOpen.emit();
    }
    onOpen() {
        this.calcitePopoverOpen.emit();
        (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    }
    onBeforeClose() {
        this.calcitePopoverBeforeClose.emit();
    }
    onClose() {
        this.calcitePopoverClose.emit();
        (0,_focusTrapComponent_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderCloseButton() {
        const { messages, closable } = this;
        return closable ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { class: CSS.closeButtonContainer, key: CSS.closeButtonContainer }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-action", { appearance: "transparent", class: CSS.closeButton, onClick: this.hide, ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl), scale: this.scale, text: messages.close }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-icon", { icon: "x", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_11__.g)(this.scale) })))) : null;
    }
    renderHeader() {
        const { heading, headingLevel } = this;
        const headingNode = heading ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)(_Heading_js__WEBPACK_IMPORTED_MODULE_5__.H, { class: CSS.heading, level: headingLevel }, heading)) : null;
        return headingNode ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { class: CSS.header, key: CSS.header }, headingNode, this.renderCloseButton())) : null;
    }
    render() {
        const { effectiveReferenceElement, heading, label, open, pointerDisabled, floatingLayout } = this;
        const displayed = effectiveReferenceElement && open;
        const hidden = !displayed;
        const arrowNode = !pointerDisabled ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)(_FloatingArrow_js__WEBPACK_IMPORTED_MODULE_10__.F, { floatingLayout: floatingLayout, key: "floating-arrow", ref: this.storeArrowEl })) : null;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.Host, { key: 'a563d48090d6e6c0c138023e169667834f657c4c', "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: '73053dbdce2cfc68fcd42667089d611e81010955', class: {
                [CSS.container]: true,
                [_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.F.animation]: true,
                [_floating_ui_js__WEBPACK_IMPORTED_MODULE_0__.F.animationActive]: displayed,
            }, ref: this.setTransitionEl }, arrowNode, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: '1fbcd45ee42b10a67881ced74db2db051231c94d', class: {
                [CSS.hasHeader]: !!heading,
                [CSS.headerContainer]: true,
            } }, this.renderHeader(), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: '522abe801b98787863aac14d990b948d2d286156', class: CSS.content }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("slot", { key: '022a8f690288acdbac4ec1b3eccf807ffe382d5d' })), !heading ? this.renderCloseButton() : null))));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "focusTrapDisabled": ["handleFocusTrapDisabled"],
        "flipPlacements": ["flipPlacementsHandler"],
        "messageOverrides": ["onMessagesChange"],
        "offsetDistance": ["offsetDistanceOffsetHandler"],
        "offsetSkidding": ["offsetSkiddingHandler"],
        "open": ["openHandler"],
        "overlayPositioning": ["overlayPositioningHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalcitePopoverStyle0; }
}, [1, "calcite-popover", {
        "autoClose": [516, "auto-close"],
        "closable": [516],
        "flipDisabled": [516, "flip-disabled"],
        "focusTrapDisabled": [516, "focus-trap-disabled"],
        "pointerDisabled": [516, "pointer-disabled"],
        "flipPlacements": [16],
        "heading": [1],
        "headingLevel": [514, "heading-level"],
        "label": [1],
        "messageOverrides": [1040],
        "messages": [1040],
        "offsetDistance": [514, "offset-distance"],
        "offsetSkidding": [514, "offset-skidding"],
        "open": [1540],
        "overlayPositioning": [513, "overlay-positioning"],
        "placement": [513],
        "referenceElement": [1, "reference-element"],
        "scale": [513],
        "triggerDisabled": [516, "trigger-disabled"],
        "effectiveLocale": [32],
        "floatingLayout": [32],
        "effectiveReferenceElement": [32],
        "defaultMessages": [32],
        "reposition": [64],
        "setFocus": [64],
        "updateFocusTrapElements": [64]
    }, undefined, {
        "focusTrapDisabled": ["handleFocusTrapDisabled"],
        "flipPlacements": ["flipPlacementsHandler"],
        "messageOverrides": ["onMessagesChange"],
        "offsetDistance": ["offsetDistanceOffsetHandler"],
        "offsetSkidding": ["offsetSkiddingHandler"],
        "open": ["openHandler"],
        "overlayPositioning": ["overlayPositioningHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-popover", "calcite-action", "calcite-icon", "calcite-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-popover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Popover);
            }
            break;
        case "calcite-action":
            if (!customElements.get(tagName)) {
                (0,_action_js__WEBPACK_IMPORTED_MODULE_13__.d)();
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_14__.d)();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                (0,_loader_js__WEBPACK_IMPORTED_MODULE_15__.d)();
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=popover.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/scrim.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/scrim.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ Scrim; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.js */ "./node_modules/@esri/calcite-components/dist/components/loader.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */







const CSS = {
    scrim: "scrim",
    content: "content",
};
const BREAKPOINTS = {
    s: 72, // Less than 72px.
    // medium is assumed default.
    l: 480, // Greater than or equal to 480px.
};

const scrimCss = ":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteScrimStyle0 = scrimCss;

const Scrim = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_5__.proxyCustomElement)(class Scrim extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_5__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("resize", () => this.handleResize());
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.handleDefaultSlotChange = (event) => {
            this.hasContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.r)(event);
        };
        this.storeLoaderEl = (el) => {
            this.loaderEl = el;
            this.handleResize();
        };
        this.loading = false;
        this.messages = undefined;
        this.messageOverrides = undefined;
        this.loaderScale = undefined;
        this.defaultMessages = undefined;
        this.effectiveLocale = "";
        this.hasContent = false;
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    effectiveLocaleChange() {
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.effectiveLocale);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
        this.resizeObserver?.observe(this.el);
    }
    async componentWillLoad() {
        await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
    }
    disconnectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
        this.resizeObserver?.disconnect();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Method
    //
    // --------------------------------------------------------------------------
    render() {
        const { hasContent, loading, messages } = this;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_5__.h)("div", { key: '286b03bb4a18b45f1b6914684a5178e952a44127', class: CSS.scrim }, loading ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_5__.h)("calcite-loader", { label: messages.loading, ref: this.storeLoaderEl, scale: this.loaderScale })) : null, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_5__.h)("div", { key: '0f8cd111720239b204d0d201610c4145d5616753', class: CSS.content, hidden: !hasContent }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_5__.h)("slot", { key: 'fe7bbced9871c9179971da0ef7ca07ea1c9ac33e', onSlotchange: this.handleDefaultSlotChange }))));
    }
    getScale(size) {
        if (size < BREAKPOINTS.s) {
            return "s";
        }
        else if (size >= BREAKPOINTS.l) {
            return "l";
        }
        else {
            return "m";
        }
    }
    handleResize() {
        const { loaderEl, el } = this;
        if (!loaderEl) {
            return;
        }
        this.loaderScale = this.getScale(Math.min(el.clientHeight, el.clientWidth) ?? 0);
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteScrimStyle0; }
}, [1, "calcite-scrim", {
        "loading": [516],
        "messages": [1040],
        "messageOverrides": [1040],
        "loaderScale": [32],
        "defaultMessages": [32],
        "effectiveLocale": [32],
        "hasContent": [32]
    }, undefined, {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-scrim", "calcite-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-scrim":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Scrim);
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                (0,_loader_js__WEBPACK_IMPORTED_MODULE_4__.d)();
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=scrim.js.map

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
//# sourceMappingURL=@esri-calcite-components-dist-components-calcite-flow-item.js.map