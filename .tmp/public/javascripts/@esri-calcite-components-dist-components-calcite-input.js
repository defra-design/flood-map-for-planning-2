"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["@esri-calcite-components-dist-components-calcite-input"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/Validation.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/Validation.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ Validation; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


const CSS = {
    validationContainer: "validation-container",
};
const Validation = ({ scale, status, id, icon, message, }) => ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.validationContainer },
    (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input-message", { "aria-live": "polite", icon: icon, id: id, scale: scale, status: status }, message)));



//# sourceMappingURL=Validation.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-input.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-input.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteInput: function() { return /* binding */ CalciteInput; },
/* harmony export */   defineCustomElement: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _input2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input2.js */ "./node_modules/@esri/calcite-components/dist/components/input2.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


const CalciteInput = _input2_js__WEBPACK_IMPORTED_MODULE_0__.I;
const defineCustomElement = _input2_js__WEBPACK_IMPORTED_MODULE_0__.d;



//# sourceMappingURL=calcite-input.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/form.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/form.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ HiddenFormInputSlot; },
/* harmony export */   a: function() { return /* binding */ afterConnectDefaultValueSet; },
/* harmony export */   c: function() { return /* binding */ connectForm; },
/* harmony export */   d: function() { return /* binding */ disconnectForm; },
/* harmony export */   f: function() { return /* binding */ findAssociatedForm; },
/* harmony export */   i: function() { return /* binding */ internalHiddenInputInputEvent; },
/* harmony export */   r: function() { return /* binding */ resetForm; },
/* harmony export */   s: function() { return /* binding */ submitForm; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */



/**
 * Any form <Component> with a `calcite<Component>Input` event needs to be included in this array.
 */
const componentsWithInputEvent = [
    "calcite-input",
    "calcite-input-number",
    "calcite-input-text",
    "calcite-text-area",
];
/**
 * Get the event name to listen for that, when emitted, will clear the
 * validation message that displays after form submission. Only validation
 * messages that are set by the browser will be cleared. If a user sets
 * validationMessage to a custom value, they are responsible for clearing it.
 *
 * Exported for testing purposes.
 *
 * @param componentTag the tag of the component, e.g. "calcite-input"
 * @returns the event name
 */
function getClearValidationEventName(componentTag) {
    const componentTagCamelCase = componentTag
        .split("-")
        .map((part, index) => index === 0 ? part : `${part[0].toUpperCase()}${part.slice(1)}`)
        .join("");
    const clearValidationEvent = `${componentTagCamelCase}${componentsWithInputEvent.includes(componentTag) ? "Input" : "Change"}`;
    return clearValidationEvent;
}
/**
 * Exported for testing purposes.
 */
const hiddenFormInputSlotName = "hidden-form-input";
function isCheckable(component) {
    return "checked" in component;
}
const onFormResetMap = new WeakMap();
const formComponentSet = new WeakSet();
/**
 * This helps determine if our form component is part of a composite form-associated component.
 *
 * @param form
 * @param formComponentEl
 */
function hasRegisteredFormComponentParent(form, formComponentEl) {
    // if we have a parent component using the form ID attribute, we assume it is form-associated
    const hasParentComponentWithFormIdSet = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(formComponentEl.parentElement, "[form]");
    if (hasParentComponentWithFormIdSet) {
        return true;
    }
    // we use events as a way to test for nested form-associated components across shadow bounds
    const formComponentRegisterEventName = "calciteInternalFormComponentRegister";
    let hasRegisteredFormComponentParent = false;
    form.addEventListener(formComponentRegisterEventName, (event) => {
        hasRegisteredFormComponentParent = event
            .composedPath()
            .some((element) => formComponentSet.has(element));
        event.stopPropagation();
    }, { once: true });
    formComponentEl.dispatchEvent(new CustomEvent(formComponentRegisterEventName, {
        bubbles: true,
        composed: true,
    }));
    return hasRegisteredFormComponentParent;
}
function displayValidationMessage(component, { status, message, icon }) {
    if ("status" in component) {
        component.status = status;
    }
    if ("validationIcon" in component && typeof component.validationIcon !== "string") {
        component.validationIcon = icon;
    }
    if ("validationMessage" in component && !component.validationMessage) {
        component.validationMessage = message;
    }
}
function getValidationComponent(el) {
    // radio-button is formAssociated, but the validation props are on the parent group
    if (el.nodeName === "CALCITE-RADIO-BUTTON") {
        return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, "calcite-radio-button-group");
    }
    return el;
}
const invalidEvent = new CustomEvent("calciteInvalid", { bubbles: true, composed: true });
function invalidHandler(event) {
    // target is the hidden input, which is slotted in the actual form component
    const hiddenInput = event?.target;
    const hiddenInputMessage = hiddenInput?.validationMessage;
    // not necessarily a calcite-input, but we don't have an HTMLCalciteFormAssociatedElement type
    const formComponent = getValidationComponent(hiddenInput?.parentElement);
    if (!formComponent) {
        return;
    }
    const componentTag = formComponent?.nodeName?.toLowerCase();
    const componentTagParts = componentTag?.split("-");
    if (componentTagParts.length < 2 || componentTagParts[0] !== "calcite") {
        return;
    }
    // prevent the browser from showing the native validation popover
    event?.preventDefault();
    if ("validity" in formComponent) {
        formComponent.validity = hiddenInput?.validity;
    }
    // dispatch a "calciteInvalid" so users can set custom validation messages
    formComponent.dispatchEvent(invalidEvent);
    displayValidationMessage(formComponent, {
        message: hiddenInputMessage,
        icon: true,
        status: "invalid",
    });
    const clearValidationEvent = getClearValidationEventName(componentTag);
    formComponent.addEventListener(clearValidationEvent, () => {
        if ("status" in formComponent) {
            formComponent.status = "idle";
        }
        if ("validationIcon" in formComponent && !formComponent.validationIcon) {
            formComponent.validationIcon = false;
        }
        if ("validationMessage" in formComponent &&
            formComponent.validationMessage === hiddenInputMessage) {
            formComponent.validationMessage = "";
        }
        if ("validity" in formComponent) {
            formComponent.validity = hiddenInput?.validity;
        }
    }, { once: true });
}
/**
 * Helper to submit a form.
 *
 * @param component
 * @returns true if its associated form was submitted, false otherwise.
 */
function submitForm(component) {
    const { formEl } = component;
    if (!formEl) {
        return false;
    }
    formEl.addEventListener("invalid", invalidHandler, true);
    formEl.requestSubmit();
    formEl.removeEventListener("invalid", invalidHandler, true);
    requestAnimationFrame(() => {
        const invalidEls = formEl.querySelectorAll("[status=invalid]");
        // focus the first invalid element that has a validation message
        for (const el of invalidEls) {
            if (el?.validationMessage) {
                el?.setFocus();
                break;
            }
        }
    });
    return true;
}
/**
 * Helper to reset a form.
 *
 * @param component
 */
function resetForm(component) {
    component.formEl?.reset();
}
/**
 * Helper to set up form interactions on connectedCallback.
 *
 * @param component
 */
function connectForm(component) {
    const { el, value } = component;
    const associatedForm = findAssociatedForm(component);
    if (!associatedForm || hasRegisteredFormComponentParent(associatedForm, el)) {
        return;
    }
    component.formEl = associatedForm;
    component.defaultValue = value;
    if (isCheckable(component)) {
        component.defaultChecked = component.checked;
    }
    const boundOnFormReset = (component.onFormReset || onFormReset).bind(component);
    associatedForm.addEventListener("reset", boundOnFormReset);
    onFormResetMap.set(component.el, boundOnFormReset);
    formComponentSet.add(el);
}
/**
 * Utility method to find a form-component's associated form element.
 *
 * @param component
 */
function findAssociatedForm(component) {
    const { el, form } = component;
    return form
        ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(el, { id: form })
        : (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, "form");
}
function onFormReset() {
    if ("status" in this) {
        this.status = "idle";
    }
    if ("validationIcon" in this) {
        this.validationIcon = false;
    }
    if ("validationMessage" in this) {
        this.validationMessage = "";
    }
    if (isCheckable(this)) {
        this.checked = this.defaultChecked;
        return;
    }
    this.value = this.defaultValue;
}
/**
 * Helper to tear down form interactions on disconnectedCallback.
 *
 * @param component
 */
function disconnectForm(component) {
    const { el, formEl } = component;
    if (!formEl) {
        return;
    }
    const boundOnFormReset = onFormResetMap.get(el);
    formEl.removeEventListener("reset", boundOnFormReset);
    onFormResetMap.delete(el);
    component.formEl = null;
    formComponentSet.delete(el);
}
/**
 * Helper for setting the default value on initialization after connectedCallback.
 *
 * Note that this is only needed if the default value cannot be determined on connectedCallback.
 *
 * @param component
 * @param value
 */
function afterConnectDefaultValueSet(component, value) {
    component.defaultValue = value;
}
const internalHiddenInputInputEvent = "calciteInternalHiddenInputInput";
const hiddenInputInputHandler = (event) => {
    event.target.dispatchEvent(new CustomEvent(internalHiddenInputInputEvent, { bubbles: true }));
};
const removeHiddenInputChangeEventListener = (input) => input.removeEventListener("input", hiddenInputInputHandler);
/**
 * Helper for maintaining a form-associated's hidden input in sync with the component.
 *
 * Based on Ionic's approach: https://github.com/ionic-team/ionic-framework/blob/e4bf052794af9aac07f887013b9250d2a045eba3/core/src/utils/helpers.ts#L198
 *
 * @param component
 */
function syncHiddenFormInput(component) {
    const { el, formEl, name, value } = component;
    const { ownerDocument } = el;
    const inputs = el.querySelectorAll(`input[slot="${hiddenFormInputSlotName}"]`);
    if (!formEl || !name) {
        inputs.forEach((input) => {
            removeHiddenInputChangeEventListener(input);
            input.remove();
        });
        return;
    }
    const values = Array.isArray(value) ? value : [value];
    const extra = [];
    const seen = new Set();
    inputs.forEach((input) => {
        const valueMatch = values.find((val) => 
        /* intentional non-strict equality check */
        val == input.value);
        if (valueMatch != null) {
            seen.add(valueMatch);
            defaultSyncHiddenFormInput(component, input, valueMatch);
        }
        else {
            extra.push(input);
        }
    });
    let docFrag;
    values.forEach((value) => {
        if (seen.has(value)) {
            return;
        }
        let input = extra.pop();
        if (!input) {
            input = ownerDocument.createElement("input");
            input.slot = hiddenFormInputSlotName;
        }
        if (!docFrag) {
            docFrag = ownerDocument.createDocumentFragment();
        }
        docFrag.append(input);
        // emits when hidden input is autofilled
        input.addEventListener("input", hiddenInputInputHandler);
        defaultSyncHiddenFormInput(component, input, value);
    });
    if (docFrag) {
        el.append(docFrag);
    }
    extra.forEach((input) => {
        removeHiddenInputChangeEventListener(input);
        input.remove();
    });
}
function defaultSyncHiddenFormInput(component, input, value) {
    const { defaultValue, disabled, form, name, required } = component;
    // keep in sync to prevent losing reset value
    input.defaultValue = defaultValue;
    input.disabled = disabled;
    input.name = name;
    input.required = required;
    input.tabIndex = -1;
    // we set the attr as the prop is read-only
    if (form) {
        input.setAttribute("form", form);
    }
    else {
        input.removeAttribute("form");
    }
    if (isCheckable(component)) {
        input.checked = component.checked;
        // keep in sync to prevent losing reset value
        input.defaultChecked = component.defaultChecked;
        // heuristic to support default/on mode from https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
        input.value = component.checked ? value || "on" : "";
    }
    else {
        input.value = value || "";
    }
    component.syncHiddenFormInput?.(input);
    const validationComponent = getValidationComponent(component.el);
    if (validationComponent && "validity" in validationComponent) {
        // mutate the component's validity object to prevent a rerender
        // https://stenciljs.com/docs/properties#mutable-arrays-and-objects
        for (const key in { ...input?.validity }) {
            validationComponent.validity[key] = input.validity[key];
        }
    }
}
/**
 * Helper to render the slot for form-associated component's hidden input.
 *
 * If the component has a default slot, this must be placed at the bottom of the component's root container to ensure it is the last child.
 *
 * render(): VNode {
 *   <Host>
 *     <div class={CSS.container}>
 *     // ...
 *     <HiddenFormInputSlot component={this} />
 *     </div>
 *   </Host>
 * }
 *
 * Note that the hidden-form-input Sass mixin must be added to the component's style to apply specific styles.
 *
 * @param root0
 * @param root0.component
 */
const HiddenFormInputSlot = ({ component, }) => {
    syncHiddenFormInput(component);
    return (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: hiddenFormInputSlotName });
};



//# sourceMappingURL=form.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/input-message.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/input-message.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ InputMessage; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */




const StatusIconDefaults = {
    valid: "check-circle",
    invalid: "exclamation-mark-triangle",
    idle: "information",
};

const inputMessageCss = ":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteInputMessageStyle0 = inputMessageCss;

const InputMessage = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class InputMessage extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.scale = "m";
        this.status = "idle";
    }
    handleIconEl() {
        this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(StatusIconDefaults, this.icon, this.status);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(StatusIconDefaults, this.icon, this.status);
    }
    render() {
        const hidden = this.el.hidden;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.Host, { key: 'c7d1b37721cec28dee1020b81ff66dee7fc8bc44', "calcite-hydrated-hidden": hidden }, this.renderIcon(this.requestedIcon), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: '7147d81e906765c154b4a61e31706a72c1ef3ae0' })));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    renderIcon(iconName) {
        if (iconName) {
            return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("calcite-icon", { class: "calcite-input-message-icon", flipRtl: this.iconFlipRtl, icon: iconName, scale: "s" }));
        }
    }
    get el() { return this; }
    static get watchers() { return {
        "status": ["handleIconEl"],
        "icon": ["handleIconEl"]
    }; }
    static get style() { return CalciteInputMessageStyle0; }
}, [1, "calcite-input-message", {
        "icon": [520],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "scale": [513],
        "status": [513]
    }, undefined, {
        "status": ["handleIconEl"],
        "icon": ["handleIconEl"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-input-message", "calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-input-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InputMessage);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_1__.d)();
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=input-message.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/input.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/input.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ syncHiddenFormInput; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
/**
 * Exported for testing purposes only
 */
const minMaxStepTypes = ["date", "datetime-local", "month", "number", "range", "time", "week"];
/**
 * Exported for testing purposes only
 */
const patternTypes = ["email", "password", "search", "tel", "text", "url"];
/**
 * Exported for testing purposes only
 */
const minMaxLengthTypes = ["email", "password", "search", "tel", "text", "textarea", "url"];
function updateConstraintValidation(inputComponent, input, propName, matchesType) {
    const attributeName = propName.toLowerCase();
    const value = inputComponent[propName];
    if (matchesType && value != null) {
        input.setAttribute(attributeName, `${value}`);
    }
    else {
        // we remove the attribute to ensure validation-constraints are properly reset
        input.removeAttribute(attributeName);
    }
}
/**
 * Synchronizes the hidden form input with the validation-related input properties.
 *
 * Note: loss of precision is expected due to the hidden input's value and validation-constraint props being strings.
 *
 * @param type - The input type.
 * @param inputComponent
 * @param hiddenFormInput
 */
function syncHiddenFormInput(type, inputComponent, hiddenFormInput) {
    hiddenFormInput.type = type === "textarea" ? "text" : type;
    const isMinMaxStepType = minMaxStepTypes.includes(type);
    const numericInputComponent = inputComponent;
    updateConstraintValidation(numericInputComponent, hiddenFormInput, "min", isMinMaxStepType);
    updateConstraintValidation(numericInputComponent, hiddenFormInput, "max", isMinMaxStepType);
    updateConstraintValidation(numericInputComponent, hiddenFormInput, "step", isMinMaxStepType);
    const isMinMaxLengthType = minMaxLengthTypes.includes(type);
    const textualInputComponent = inputComponent;
    updateConstraintValidation(textualInputComponent, hiddenFormInput, "minLength", isMinMaxLengthType);
    updateConstraintValidation(textualInputComponent, hiddenFormInput, "maxLength", isMinMaxLengthType);
    const isPatternType = patternTypes.includes(type);
    updateConstraintValidation(textualInputComponent, hiddenFormInput, "pattern", isPatternType);
}



//# sourceMappingURL=input.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/input2.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/input2.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ Input; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./node_modules/@esri/calcite-components/dist/components/form.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _label_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label.js */ "./node_modules/@esri/calcite-components/dist/components/label.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _resources_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources.js */ "./node_modules/@esri/calcite-components/dist/components/resources.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _Validation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Validation.js */ "./node_modules/@esri/calcite-components/dist/components/Validation.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input.js */ "./node_modules/@esri/calcite-components/dist/components/input.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/* harmony import */ var _input_message_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input-message.js */ "./node_modules/@esri/calcite-components/dist/components/input-message.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./progress.js */ "./node_modules/@esri/calcite-components/dist/components/progress.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


















const CSS = {
    loader: "loader",
    clearButton: "clear-button",
    editingEnabled: "editing-enabled",
    inlineChild: "inline-child",
    inputIcon: "icon",
    prefix: "prefix",
    suffix: "suffix",
    numberButtonWrapper: "number-button-wrapper",
    buttonItemHorizontal: "number-button-item--horizontal",
    wrapper: "element-wrapper",
    inputWrapper: "wrapper",
    actionWrapper: "action-wrapper",
    resizeIconWrapper: "resize-icon-wrapper",
    numberButtonItem: "number-button-item",
};
const IDS = {
    validationMessage: "inputValidationMessage",
};
const INPUT_TYPE_ICONS = {
    tel: "phone",
    password: "lock",
    email: "email-address",
    date: "calendar",
    time: "clock",
    search: "search",
};
const SLOTS = {
    action: "action",
};

const inputCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteInputStyle0 = inputCss;

const Input = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.proxyCustomElement)(class Input extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteInternalInputFocus = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calciteInternalInputFocus", 6);
        this.calciteInternalInputBlur = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calciteInternalInputBlur", 6);
        this.calciteInputInput = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calciteInputInput", 7);
        this.calciteInputChange = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.createEvent)(this, "calciteInputChange", 6);
        /** keep track of the rendered child type */
        this.childElType = "input";
        this.previousValueOrigin = "initial";
        this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_7__.c)("mutation", () => this.setDisabledAction());
        this.userChangedValue = false;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.keyDownHandler = (event) => {
            if (this.readOnly || this.disabled || event.defaultPrevented) {
                return;
            }
            if (this.isClearable && event.key === "Escape") {
                this.clearInputValue(event);
                event.preventDefault();
            }
            if (event.key === "Enter") {
                if ((0,_form_js__WEBPACK_IMPORTED_MODULE_1__.s)(this)) {
                    event.preventDefault();
                }
            }
        };
        this.clearInputValue = (nativeEvent) => {
            this.setValue({
                committing: true,
                nativeEvent,
                origin: "user",
                value: "",
            });
        };
        this.emitChangeIfUserModified = () => {
            if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
                this.calciteInputChange.emit();
                this.setPreviousEmittedValue(this.value);
            }
        };
        this.inputBlurHandler = () => {
            window.clearInterval(this.nudgeNumberValueIntervalId);
            this.calciteInternalInputBlur.emit();
            this.emitChangeIfUserModified();
        };
        this.clickHandler = (event) => {
            if (this.disabled) {
                return;
            }
            const composedPath = event.composedPath();
            if (!composedPath.includes(this.inputWrapperEl) ||
                composedPath.includes(this.actionWrapperEl)) {
                return;
            }
            this.setFocus();
        };
        this.inputFocusHandler = () => {
            this.calciteInternalInputFocus.emit();
        };
        this.inputChangeHandler = () => {
            if (this.type === "file") {
                this.files = this.childEl.files;
            }
        };
        this.inputInputHandler = (nativeEvent) => {
            if (this.disabled || this.readOnly) {
                return;
            }
            this.setValue({
                nativeEvent,
                origin: "user",
                value: nativeEvent.target.value,
            });
        };
        this.inputKeyDownHandler = (event) => {
            if (this.disabled || this.readOnly) {
                return;
            }
            if (event.key === "Enter") {
                this.emitChangeIfUserModified();
            }
        };
        this.inputNumberInputHandler = (nativeEvent) => {
            if (this.disabled || this.readOnly) {
                return;
            }
            if (this.value === "Infinity" || this.value === "-Infinity") {
                return;
            }
            const value = nativeEvent.target.value;
            _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
                locale: this.effectiveLocale,
                numberingSystem: this.numberingSystem,
                useGrouping: this.groupSeparator,
            };
            const delocalizedValue = _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.delocalize(value);
            if (nativeEvent.inputType === "insertFromPaste") {
                if (!(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(delocalizedValue)) {
                    nativeEvent.preventDefault();
                }
                this.setValue({
                    nativeEvent,
                    origin: "user",
                    value: (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.p)(delocalizedValue),
                });
                this.childNumberEl.value = this.displayedValue;
            }
            else {
                this.setValue({
                    nativeEvent,
                    origin: "user",
                    value: delocalizedValue,
                });
            }
        };
        this.inputNumberKeyDownHandler = (event) => {
            if (this.type !== "number" || this.disabled || this.readOnly) {
                return;
            }
            if (this.value === "Infinity" || this.value === "-Infinity") {
                event.preventDefault();
                if (event.key === "Backspace" || event.key === "Delete") {
                    this.clearInputValue(event);
                }
                return;
            }
            if (event.key === "ArrowUp") {
                /* prevent default behavior of moving cursor to the beginning of the input when holding down ArrowUp */
                event.preventDefault();
                this.nudgeNumberValue("up", event);
                return;
            }
            if (event.key === "ArrowDown") {
                this.nudgeNumberValue("down", event);
                return;
            }
            const supportedKeys = [
                ..._key_js__WEBPACK_IMPORTED_MODULE_3__.n,
                "ArrowLeft",
                "ArrowRight",
                "Backspace",
                "Delete",
                "Enter",
                "Escape",
                "Tab",
            ];
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }
            const isShiftTabEvent = event.shiftKey && event.key === "Tab";
            if (supportedKeys.includes(event.key) || isShiftTabEvent) {
                if (event.key === "Enter") {
                    this.emitChangeIfUserModified();
                }
                return;
            }
            _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
                locale: this.effectiveLocale,
                numberingSystem: this.numberingSystem,
                useGrouping: this.groupSeparator,
            };
            if (event.key === _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal) {
                if (!this.value && !this.childNumberEl.value) {
                    return;
                }
                if (this.value && this.childNumberEl.value.indexOf(_locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal) === -1) {
                    return;
                }
            }
            if (/[eE]/.test(event.key)) {
                if (!this.value && !this.childNumberEl.value) {
                    return;
                }
                if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
                    return;
                }
            }
            if (event.key === "-") {
                if (!this.value && !this.childNumberEl.value) {
                    return;
                }
                if (this.value && this.childNumberEl.value.split("-").length <= 2) {
                    return;
                }
            }
            event.preventDefault();
        };
        this.nudgeNumberValue = (direction, nativeEvent) => {
            if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
                return;
            }
            const inputMax = this.maxString ? parseFloat(this.maxString) : null;
            const inputMin = this.minString ? parseFloat(this.minString) : null;
            const valueNudgeDelayInMs = 150;
            this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
            if (this.nudgeNumberValueIntervalId) {
                window.clearInterval(this.nudgeNumberValueIntervalId);
            }
            let firstValueNudge = true;
            this.nudgeNumberValueIntervalId = window.setInterval(() => {
                if (firstValueNudge) {
                    firstValueNudge = false;
                    return;
                }
                this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
            }, valueNudgeDelayInMs);
        };
        this.numberButtonPointerUpAndOutHandler = () => {
            window.clearInterval(this.nudgeNumberValueIntervalId);
        };
        this.numberButtonPointerDownHandler = (event) => {
            if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.y)(event)) {
                return;
            }
            event.preventDefault();
            const direction = event.target.dataset.adjustment;
            if (!this.disabled) {
                this.nudgeNumberValue(direction, event);
            }
        };
        this.onHiddenFormInputInput = (event) => {
            if (event.target.name === this.name) {
                this.setValue({
                    value: event.target.value,
                    origin: "direct",
                });
            }
            this.setFocus();
            event.stopPropagation();
        };
        this.setChildElRef = (el) => {
            this.childEl = el;
        };
        this.setChildNumberElRef = (el) => {
            this.childNumberEl = el;
        };
        this.setInputValue = (newInputValue) => {
            if (this.type === "text" && !this.childEl) {
                return;
            }
            if (this.type === "number" && !this.childNumberEl) {
                return;
            }
            this[`child${this.type === "number" ? "Number" : ""}El`].value = newInputValue;
        };
        this.setPreviousEmittedValue = (value) => {
            this.previousEmittedValue = this.normalizeValue(value);
        };
        this.setPreviousValue = (value) => {
            this.previousValue = this.normalizeValue(value);
        };
        this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value, }) => {
            this.setPreviousValue(previousValue ?? this.value);
            this.previousValueOrigin = origin;
            if (this.type === "number") {
                _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.numberFormatOptions = {
                    locale: this.effectiveLocale,
                    numberingSystem: this.numberingSystem,
                    useGrouping: this.groupSeparator,
                    signDisplay: "never",
                };
                const isValueDeleted = this.previousValue?.length > value.length || this.value?.length > value.length;
                const hasTrailingDecimalSeparator = value.charAt(value.length - 1) === ".";
                const sanitizedValue = hasTrailingDecimalSeparator && isValueDeleted ? value : (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.s)(value);
                const newValue = value && !sanitizedValue
                    ? (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.previousValue)
                        ? this.previousValue
                        : ""
                    : sanitizedValue;
                let newLocalizedValue = _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.localize(newValue);
                if (origin !== "connected" && !hasTrailingDecimalSeparator) {
                    newLocalizedValue = (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.a)(newLocalizedValue, newValue, _locale_js__WEBPACK_IMPORTED_MODULE_6__.n);
                }
                // adds localized trailing decimal separator
                this.displayedValue =
                    hasTrailingDecimalSeparator && isValueDeleted
                        ? `${newLocalizedValue}${_locale_js__WEBPACK_IMPORTED_MODULE_6__.n.decimal}`
                        : newLocalizedValue;
                this.userChangedValue = origin === "user" && this.value !== newValue;
                // don't sanitize the start of negative/decimal numbers, but
                // don't set value to an invalid number
                this.value = ["-", "."].includes(newValue) ? "" : newValue;
            }
            else {
                this.userChangedValue = origin === "user" && this.value !== value;
                this.value = value;
            }
            if (origin === "direct") {
                this.setInputValue(value);
                this.previousEmittedValue = value;
            }
            if (nativeEvent) {
                const calciteInputInputEvent = this.calciteInputInput.emit();
                if (calciteInputInputEvent.defaultPrevented) {
                    this.value = this.previousValue;
                    this.displayedValue =
                        this.type === "number"
                            ? _locale_js__WEBPACK_IMPORTED_MODULE_6__.n.localize(this.previousValue)
                            : this.previousValue;
                }
                else if (committing) {
                    this.emitChangeIfUserModified();
                }
            }
        };
        this.inputKeyUpHandler = () => {
            window.clearInterval(this.nudgeNumberValueIntervalId);
        };
        this.alignment = "start";
        this.autofocus = undefined;
        this.clearable = false;
        this.disabled = false;
        this.enterKeyHint = undefined;
        this.form = undefined;
        this.groupSeparator = false;
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.inputMode = undefined;
        this.label = undefined;
        this.loading = false;
        this.numberingSystem = undefined;
        this.localeFormat = false;
        this.max = undefined;
        this.min = undefined;
        this.maxLength = undefined;
        this.minLength = undefined;
        this.validationMessage = undefined;
        this.validationIcon = undefined;
        this.validity = {
            valid: false,
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valueMissing: false,
        };
        this.name = undefined;
        this.numberButtonType = "vertical";
        this.placeholder = undefined;
        this.prefixText = undefined;
        this.readOnly = false;
        this.required = false;
        this.scale = "m";
        this.status = "idle";
        this.step = undefined;
        this.autocomplete = undefined;
        this.pattern = undefined;
        this.accept = undefined;
        this.multiple = false;
        this.suffixText = undefined;
        this.editingEnabled = false;
        this.type = "text";
        this.value = "";
        this.files = undefined;
        this.messages = undefined;
        this.messageOverrides = undefined;
        this.defaultMessages = undefined;
        this.effectiveLocale = "";
        this.displayedValue = undefined;
        this.slottedActionElDisabledInternally = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Global attributes
    //
    //--------------------------------------------------------------------------
    handleGlobalAttributesChanged() {
        (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.forceUpdate)(this);
    }
    disabledWatcher() {
        this.setDisabledAction();
    }
    /** watcher to update number-to-string for max */
    maxWatcher() {
        this.maxString = this.max?.toString() || null;
    }
    /** watcher to update number-to-string for min */
    minWatcher() {
        this.minString = this.min?.toString() || null;
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    valueWatcher(newValue, previousValue) {
        if (!this.userChangedValue) {
            if (this.type === "number" && (newValue === "Infinity" || newValue === "-Infinity")) {
                this.displayedValue = newValue;
                this.previousEmittedValue = newValue;
                return;
            }
            this.setValue({
                origin: "direct",
                previousValue,
                value: newValue == null || newValue == ""
                    ? ""
                    : this.type === "number"
                        ? (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(newValue)
                            ? newValue
                            : this.previousValue || ""
                        : newValue,
            });
            this.warnAboutInvalidNumberValue(newValue);
        }
        this.userChangedValue = false;
    }
    updateRequestedIcon() {
        this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(INPUT_TYPE_ICONS, this.icon, this.type);
    }
    get isClearable() {
        return !this.isTextarea && (this.clearable || this.type === "search") && this.value?.length > 0;
    }
    get isTextarea() {
        return this.childElType === "textarea";
    }
    effectiveLocaleChange() {
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.u)(this, this.effectiveLocale);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
        this.inlineEditableEl = this.el.closest("calcite-inline-editable");
        if (this.inlineEditableEl) {
            this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
        }
        (0,_label_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
        (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
        this.mutationObserver?.observe(this.el, { childList: true });
        this.setDisabledAction();
        this.el.addEventListener(_form_js__WEBPACK_IMPORTED_MODULE_1__.i, this.onHiddenFormInputInput);
    }
    disconnectedCallback() {
        (0,_label_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
        (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
        this.mutationObserver?.disconnect();
        this.el.removeEventListener(_form_js__WEBPACK_IMPORTED_MODULE_1__.i, this.onHiddenFormInputInput);
    }
    async componentWillLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
        this.childElType = this.type === "textarea" ? "textarea" : "input";
        this.maxString = this.max?.toString();
        this.minString = this.min?.toString();
        this.requestedIcon = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.o)(INPUT_TYPE_ICONS, this.icon, this.type);
        await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_9__.s)(this);
        this.setPreviousEmittedValue(this.value);
        this.setPreviousValue(this.value);
        if (this.type === "number") {
            if (this.value === "Infinity" || this.value === "-Infinity") {
                this.displayedValue = this.value;
                this.previousEmittedValue = this.value;
            }
            else {
                this.warnAboutInvalidNumberValue(this.value);
                this.setValue({
                    origin: "connected",
                    value: (0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.value) ? this.value : "",
                });
            }
        }
    }
    componentDidLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
    }
    componentShouldUpdate(newValue, oldValue, property) {
        if (this.type === "number" && property === "value" && newValue && !(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(newValue)) {
            this.setValue({
                origin: "reset",
                value: oldValue,
            });
            return false;
        }
        return true;
    }
    componentDidRender() {
        (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
        if (this.type === "number") {
            this.childNumberEl?.focus();
        }
        else {
            this.childEl?.focus();
        }
    }
    /** Selects the text of the component's `value`. */
    async selectText() {
        if (this.type === "number") {
            this.childNumberEl?.select();
        }
        else {
            this.childEl?.select();
        }
    }
    onLabelClick() {
        this.setFocus();
    }
    incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
        const { value } = this;
        if (value === "Infinity" || value === "-Infinity") {
            return;
        }
        const adjustment = direction === "up" ? 1 : -1;
        const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
        const inputVal = new _locale_js__WEBPACK_IMPORTED_MODULE_6__.B(value !== "" ? value : "0");
        const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
        const nudgedValueBelowInputMin = () => typeof inputMin === "number" &&
            !isNaN(inputMin) &&
            nudgedValue.subtract(`${inputMin}`).isNegative;
        const nudgedValueAboveInputMax = () => typeof inputMax === "number" &&
            !isNaN(inputMax) &&
            !nudgedValue.subtract(`${inputMax}`).isNegative;
        const finalValue = nudgedValueBelowInputMin()
            ? `${inputMin}`
            : nudgedValueAboveInputMax()
                ? `${inputMax}`
                : nudgedValue.toString();
        this.setValue({
            committing: true,
            nativeEvent,
            origin: "user",
            value: finalValue,
        });
    }
    syncHiddenFormInput(input) {
        (0,_input_js__WEBPACK_IMPORTED_MODULE_12__.s)(this.type, this, input);
    }
    setDisabledAction() {
        const slottedActionEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.g)(this.el, "action");
        if (!slottedActionEl) {
            return;
        }
        if (this.disabled) {
            if (slottedActionEl.getAttribute("disabled") == null) {
                this.slottedActionElDisabledInternally = true;
            }
            slottedActionEl.setAttribute("disabled", "");
        }
        else if (this.slottedActionElDisabledInternally) {
            slottedActionEl.removeAttribute("disabled");
            this.slottedActionElDisabledInternally = false;
        }
    }
    normalizeValue(value) {
        return this.type === "number" ? ((0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(value) ? value : "") : value;
    }
    warnAboutInvalidNumberValue(value) {
        if (this.type === "number" && value && !(0,_locale_js__WEBPACK_IMPORTED_MODULE_6__.i)(value)) {
            console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.el);
        const loader = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: 'ed9acea9dbc18f4cfc5e7095c1e2de0b1adfdf35', class: CSS.loader }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-progress", { key: '58321a27c25dd848a648d2e3d5ca6dfc3f5fd649', label: this.messages.loading, type: "indeterminate" })));
        const inputClearButton = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("button", { key: '348d8dee0c032afe986b1e253c9d667256f3d9f0', "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-icon", { key: '334b68a283b767c0e9bea09ccfd83d09c8c17711', icon: "x", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_10__.g)(this.scale) })));
        const iconEl = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-icon", { key: '4ab83aa9268277a38449ebe4a6e3db4dc9badcae', class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_10__.g)(this.scale) }));
        const isHorizontalNumberButton = this.numberButtonType === "horizontal";
        const numberButtonsHorizontalUp = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("button", { key: '2dd700034d38581aaea39c019e626ffa1a2c1c16', "aria-hidden": "true", class: {
                [CSS.numberButtonItem]: true,
                [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
            }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-icon", { key: '6ca9a7c93aa14520292ad8c800c4e099bd46f30d', icon: "chevron-up", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_10__.g)(this.scale) })));
        const numberButtonsHorizontalDown = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("button", { key: 'cdbd88ddd308bd82b6d239a83f365a2c5e226cfc', "aria-hidden": "true", class: {
                [CSS.numberButtonItem]: true,
                [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
            }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-icon", { key: 'f1b9cf329da9add564d690c517ddcc414c4fbfa3', icon: "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_10__.g)(this.scale) })));
        const numberButtonsVertical = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: '247efdce33568f219b1bf3bf252b8b19a74d03ea', class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
        const prefixText = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: '01819a850399fb20a29471861e011695bf80af97', class: CSS.prefix }, this.prefixText);
        const suffixText = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: 'dcc073305f3824a0eb72ef230bd217dabdb72104', class: CSS.suffix }, this.suffixText);
        const autofocus = this.el.autofocus || this.el.hasAttribute("autofocus") ? true : null;
        const enterKeyHint = this.el.enterKeyHint || this.el.getAttribute("enterkeyhint");
        const inputMode = this.el.inputMode || this.el.getAttribute("inputmode");
        const localeNumberInput = this.type === "number" ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("input", { accept: this.accept, "aria-errormessage": IDS.validationMessage, "aria-invalid": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.status === "invalid"), "aria-label": (0,_label_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), autocomplete: this.autocomplete, autofocus: autofocus, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: enterKeyHint, inputMode: inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, multiple: this.multiple, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildNumberElRef, type: "text", value: this.displayedValue })) : null;
        const childEl = this.type !== "number"
            ? [
                (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)(this.childElType, { accept: this.accept, "aria-errormessage": IDS.validationMessage, "aria-invalid": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.status === "invalid"), "aria-label": (0,_label_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), autocomplete: this.autocomplete, autofocus: autofocus, class: {
                        [CSS.editingEnabled]: this.editingEnabled,
                        [CSS.inlineChild]: !!this.inlineEditableEl,
                    }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: enterKeyHint, inputMode: inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, multiple: this.multiple, name: this.name, onBlur: this.inputBlurHandler, onChange: this.inputChangeHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildElRef, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value }),
                this.isTextarea ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { class: CSS.resizeIconWrapper }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("calcite-icon", { icon: "chevron-down", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_10__.g)(this.scale) }))) : null,
            ]
            : null;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.Host, { key: '23d6092960315f172a56105b9af75ddc6497874c', onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)(_interactive_js__WEBPACK_IMPORTED_MODULE_2__.I, { key: '1bb063f39c14a829a376465fa8c2bbc288046ac7', disabled: this.disabled }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: '7f3644f002b7cb75d93d9c0218508b502ddcfd0b', class: { [CSS.inputWrapper]: true, [_resources_js__WEBPACK_IMPORTED_MODULE_8__.C.rtl]: dir === "rtl" }, ref: (el) => (this.inputWrapperEl = el) }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
            ? numberButtonsHorizontalDown
            : null, this.prefixText ? prefixText : null, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: '0d01898e4949a60e0853c1a72669f5c9d6c91ba5', class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("div", { key: '42e7adec440e417128feb9845c36d0444e6c1ae4', class: CSS.actionWrapper, ref: (el) => (this.actionWrapperEl = el) }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)("slot", { key: 'f391b035ad9fc108d1f99c4cedf539425c20a36d', name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
            ? numberButtonsVertical
            : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
            ? numberButtonsHorizontalUp
            : null, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)(_form_js__WEBPACK_IMPORTED_MODULE_1__.H, { key: 'df415df551b4a9a16565c8f554454d01aa89327e', component: this })), this.validationMessage && this.status === "invalid" ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_16__.h)(_Validation_js__WEBPACK_IMPORTED_MODULE_11__.V, { icon: this.validationIcon, id: IDS.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status })) : null)));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "autofocus": ["handleGlobalAttributesChanged"],
        "enterkeyhint": ["handleGlobalAttributesChanged"],
        "inputmode": ["handleGlobalAttributesChanged"],
        "disabled": ["disabledWatcher"],
        "max": ["maxWatcher"],
        "min": ["minWatcher"],
        "messageOverrides": ["onMessagesChange"],
        "value": ["valueWatcher"],
        "icon": ["updateRequestedIcon"],
        "type": ["updateRequestedIcon"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteInputStyle0; }
}, [1, "calcite-input", {
        "alignment": [513],
        "autofocus": [4],
        "clearable": [516],
        "disabled": [516],
        "enterKeyHint": [1, "enter-key-hint"],
        "form": [513],
        "groupSeparator": [516, "group-separator"],
        "icon": [520],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "inputMode": [1, "input-mode"],
        "label": [1],
        "loading": [516],
        "numberingSystem": [513, "numbering-system"],
        "localeFormat": [4, "locale-format"],
        "max": [514],
        "min": [514],
        "maxLength": [514, "max-length"],
        "minLength": [514, "min-length"],
        "validationMessage": [1, "validation-message"],
        "validationIcon": [520, "validation-icon"],
        "validity": [1040],
        "name": [513],
        "numberButtonType": [513, "number-button-type"],
        "placeholder": [1],
        "prefixText": [1, "prefix-text"],
        "readOnly": [516, "read-only"],
        "required": [516],
        "scale": [513],
        "status": [513],
        "step": [520],
        "autocomplete": [1],
        "pattern": [1],
        "accept": [1],
        "multiple": [4],
        "suffixText": [1, "suffix-text"],
        "editingEnabled": [1540, "editing-enabled"],
        "type": [513],
        "value": [1025],
        "files": [16],
        "messages": [1040],
        "messageOverrides": [1040],
        "defaultMessages": [32],
        "effectiveLocale": [32],
        "displayedValue": [32],
        "slottedActionElDisabledInternally": [32],
        "setFocus": [64],
        "selectText": [64]
    }, undefined, {
        "autofocus": ["handleGlobalAttributesChanged"],
        "enterkeyhint": ["handleGlobalAttributesChanged"],
        "inputmode": ["handleGlobalAttributesChanged"],
        "disabled": ["disabledWatcher"],
        "max": ["maxWatcher"],
        "min": ["minWatcher"],
        "messageOverrides": ["onMessagesChange"],
        "value": ["valueWatcher"],
        "icon": ["updateRequestedIcon"],
        "type": ["updateRequestedIcon"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-input", "calcite-icon", "calcite-input-message", "calcite-progress"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Input);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_13__.d)();
            }
            break;
        case "calcite-input-message":
            if (!customElements.get(tagName)) {
                (0,_input_message_js__WEBPACK_IMPORTED_MODULE_14__.d)();
            }
            break;
        case "calcite-progress":
            if (!customElements.get(tagName)) {
                (0,_progress_js__WEBPACK_IMPORTED_MODULE_15__.d)();
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=input2.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/label.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ associateExplicitLabelToUnlabeledComponent; },
/* harmony export */   b: function() { return /* binding */ labelDisconnectedEvent; },
/* harmony export */   c: function() { return /* binding */ connectLabel; },
/* harmony export */   d: function() { return /* binding */ disconnectLabel; },
/* harmony export */   g: function() { return /* binding */ getLabelText; },
/* harmony export */   l: function() { return /* binding */ labelConnectedEvent; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */



/**
 * Exported for testing purposes only
 *
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternalLabelDisconnected";
const labelTagName = "calcite-label";
const labelToLabelables = new WeakMap();
const onLabelClickMap = new WeakMap();
const onLabelConnectedMap = new WeakMap();
const onLabelDisconnectedMap = new WeakMap();
const unlabeledComponents = new Set();
const findLabelForComponent = (componentEl) => {
    const { id } = componentEl;
    const forLabel = id && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(componentEl, { selector: `${labelTagName}[for="${id}"]` });
    if (forLabel) {
        return forLabel;
    }
    const parentLabel = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(componentEl, labelTagName);
    if (!parentLabel ||
        // labelable components within other custom elements are not considered labelable
        hasAncestorCustomElements(parentLabel, componentEl)) {
        return null;
    }
    return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
    let traversedElements;
    const customElementAncestorCheckEventType = "custom-element-ancestor-check";
    const listener = (event) => {
        event.stopImmediatePropagation();
        const composedPath = event.composedPath();
        traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
    };
    label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
    componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
    label.removeEventListener(customElementAncestorCheckEventType, listener);
    const ancestorCustomElements = traversedElements
        .filter((el) => el !== componentEl && el !== label)
        .filter((el) => el.tagName?.includes("-"));
    return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 *
 * @param component
 */
function connectLabel(component) {
    if (!component) {
        return;
    }
    const labelEl = findLabelForComponent(component.el);
    if ((onLabelClickMap.has(labelEl) && labelEl === component.labelEl) ||
        (!labelEl && unlabeledComponents.has(component))) {
        return;
    }
    const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
    if (labelEl) {
        component.labelEl = labelEl;
        const labelables = labelToLabelables.get(labelEl) || [];
        labelables.push(component);
        labelToLabelables.set(labelEl, labelables.sort(sortByDOMOrder));
        if (!onLabelClickMap.has(component.labelEl)) {
            onLabelClickMap.set(component.labelEl, onLabelClick);
            component.labelEl.addEventListener(labelClickEvent, onLabelClick);
        }
        unlabeledComponents.delete(component);
        document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
        onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
        document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
    }
    else if (!unlabeledComponents.has(component)) {
        boundOnLabelDisconnected();
        document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
    }
}
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 *
 * @param component
 */
function disconnectLabel(component) {
    if (!component) {
        return;
    }
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
    onLabelConnectedMap.delete(component);
    onLabelDisconnectedMap.delete(component);
    if (!component.labelEl) {
        return;
    }
    const labelables = labelToLabelables.get(component.labelEl);
    if (labelables.length === 1) {
        component.labelEl.removeEventListener(labelClickEvent, onLabelClickMap.get(component.labelEl));
        onLabelClickMap.delete(component.labelEl);
    }
    labelToLabelables.set(component.labelEl, labelables.filter((labelable) => labelable !== component).sort(sortByDOMOrder));
    component.labelEl = null;
}
function sortByDOMOrder(a, b) {
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.u)(a.el, b.el) ? -1 : 1;
}
/**
 * Helper to get the label text from a component.
 *
 * @param component
 */
function getLabelText(component) {
    return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
    const labelClickTarget = event.detail.sourceEvent.target;
    const labelables = labelToLabelables.get(this);
    const clickedLabelable = labelables.find((labelable) => labelable.el === labelClickTarget);
    const labelableChildClicked = labelables.includes(clickedLabelable);
    if (labelableChildClicked) {
        // no need to forward click as labelable will receive focus
        return;
    }
    const firstLabelable = labelables[0];
    if (firstLabelable.disabled) {
        return;
    }
    firstLabelable.onLabelClick(event);
}
function onLabelConnected() {
    if (unlabeledComponents.has(this)) {
        connectLabel(this);
    }
}
function onLabelDisconnected() {
    unlabeledComponents.add(this);
    const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
    onLabelConnectedMap.set(this, boundOnLabelConnected);
    document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}
/**
 * Helper to associate an explicit label (i.e., using `for`) with a labelable component that does not have an associated label.
 *
 * @param label - the label element
 */
async function associateExplicitLabelToUnlabeledComponent(label) {
    await (0,_component_js__WEBPACK_IMPORTED_MODULE_1__.c)(label);
    const alreadyLabeled = labelToLabelables.has(label);
    if (alreadyLabeled) {
        return;
    }
    const forComponentEl = label.ownerDocument?.getElementById(label.for);
    if (!forComponentEl) {
        return;
    }
    requestAnimationFrame(() => {
        for (const labelable of unlabeledComponents) {
            if (labelable.el === forComponentEl) {
                connectLabel(labelable);
                break;
            }
        }
    });
}



//# sourceMappingURL=label.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/progress.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/progress.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: function() { return /* binding */ Progress; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _resources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.js */ "./node_modules/@esri/calcite-components/dist/components/resources.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */




const progressCss = ":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteProgressStyle0 = progressCss;

const Progress = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class Progress extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = "determinate";
        this.value = 0;
        this.label = undefined;
        this.text = undefined;
        this.reversed = false;
    }
    render() {
        const isDeterminate = this.type === "determinate";
        const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
        const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.el);
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { key: '92597fefec948e4494425db28cd87bfad3cc76f8', "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { key: 'd2a8ec085909b4bd35f443d0e831d645fb159317', class: "track" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { key: '2dd26e56a0f344d02f1b4068167f61d9da4d2cbd', class: {
                bar: true,
                indeterminate: this.type === "indeterminate",
                [_resources_js__WEBPACK_IMPORTED_MODULE_1__.C.rtl]: dir === "rtl",
                reversed: this.reversed,
            }, style: barStyles })), this.text ? (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "text" }, this.text) : null));
    }
    get el() { return this; }
    static get style() { return CalciteProgressStyle0; }
}, [1, "calcite-progress", {
        "type": [513],
        "value": [2],
        "label": [1],
        "text": [1],
        "reversed": [516]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-progress"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-progress":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Progress);
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=progress.js.map

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
//# sourceMappingURL=@esri-calcite-components-dist-components-calcite-input.js.map