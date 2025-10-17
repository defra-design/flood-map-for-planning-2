'use strict'
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   slider-opacity-viewer.js
 *
 *   Desc:   OpacitySlider widget that implements ARIA Authoring Practices
 */

// Create OpacitySlider that contains value, valuemin, valuemax, and valuenow
class OpacitySlider {
  constructor(domNode, initialValue) {
    this.domNode = domNode
    this.initialValue = initialValue * 100

    this.pointerSlider = false

    this.sliders = {}

    this.svgWidth = 250 //310
    this.svgHeight = 50
    this.borderWidth = 2

    this.valueY = 20

    this.railX = 15
    this.railY = 26
    this.railWidth = 225 // 275
    this.railHeight = 14

    this.thumbHeight = this.railHeight
    this.thumbWidth = this.thumbHeight
    this.rectRadius = this.railHeight / 4

    this.focusY = this.borderWidth
    this.focusWidth = 36
    this.focusHeight = 48

    this.initSliderRefs(this.sliders, 'opacity')

    document.body.addEventListener('pointerup', this.onThumbPointerUp.bind(this))
  }

  initSliderRefs(sliderRef, name) {
    sliderRef[name] = {}
    var n = this.domNode.querySelector('.opacity-slider.' + name)
    sliderRef[name].sliderNode = n

    sliderRef[name].svgNode = n.querySelector('svg')
    sliderRef[name].svgNode.setAttribute('width', this.svgWidth)
    sliderRef[name].svgNode.setAttribute('height', this.svgHeight)
    sliderRef[name].svgPoint = sliderRef[name].svgNode.createSVGPoint()

    sliderRef[name].valueNode = n.querySelector('.value')
    sliderRef[name].valueNode.setAttribute('y', this.valueY)

    sliderRef[name].thumbNode = n.querySelector('.thumb')
    sliderRef[name].thumbNode.setAttribute('width', this.thumbWidth)
    sliderRef[name].thumbNode.setAttribute('height', this.thumbHeight)
    sliderRef[name].thumbNode.setAttribute('y', this.railY)
    sliderRef[name].thumbNode.setAttribute('rx', this.rectRadius)

    sliderRef[name].focusNode = n.querySelector('.focus')
    sliderRef[name].focusNode.setAttribute('width', this.focusWidth - this.borderWidth)
    sliderRef[name].focusNode.setAttribute('height', this.focusHeight - this.borderWidth)
    sliderRef[name].focusNode.setAttribute('y', this.focusY)
    sliderRef[name].focusNode.setAttribute('rx', this.rectRadius)

    sliderRef[name].railNode = n.querySelector('.opacity-slider .rail')
    sliderRef[name].railNode.setAttribute('x', this.railX)
    sliderRef[name].railNode.setAttribute('y', this.railY)
    sliderRef[name].railNode.setAttribute('width', this.railWidth)
    sliderRef[name].railNode.setAttribute('height', this.railHeight)
    sliderRef[name].railNode.setAttribute('rx', this.rectRadius)

    sliderRef[name].fillNode = n.querySelector('.opacity-slider .fill')
    sliderRef[name].fillNode.setAttribute('x', this.railX)
    sliderRef[name].fillNode.setAttribute('y', this.railY)
    sliderRef[name].fillNode.setAttribute('width', this.railWidth)
    sliderRef[name].fillNode.setAttribute('height', this.railHeight)
    sliderRef[name].fillNode.setAttribute('rx', this.rectRadius)
  }

  // Initialize slider
  init() {
    for (var slider in this.sliders) {
      if (this.sliders[slider].sliderNode.tabIndex != 0) {
        this.sliders[slider].sliderNode.tabIndex = 0
      }

      this.sliders[slider].railNode.addEventListener('click', this.onRailClick.bind(this))
      this.sliders[slider].sliderNode.addEventListener('keydown', this.onSliderKeyDown.bind(this))
      this.sliders[slider].sliderNode.addEventListener('pointerdown', this.onThumbPointerDown.bind(this))
      this.sliders[slider].valueNode.addEventListener('keydown', this.onSliderKeyDown.bind(this))
      this.sliders[slider].valueNode.addEventListener('pointerdown', this.onThumbPointerDown.bind(this))
      this.sliders[slider].sliderNode.addEventListener('pointermove', this.onThumbPointerMove.bind(this))

      // this.moveSliderTo(this.sliders[slider], this.getValueNow(this.sliders[slider]))
      this.moveSliderTo(this.sliders[slider], this.initialValue)
    }
  }

  // Get point in global SVG space
  getSVGPoint(slider, event) {
    slider.svgPoint.x = event.clientX
    slider.svgPoint.y = event.clientY
    return slider.svgPoint.matrixTransform(
      slider.svgNode.getScreenCTM().inverse()
    )
  }

  getSlider(domNode) {
    if (!domNode.classList.contains('opacity-slider')) {
      if (domNode.tagName.toLowerCase() === 'rect') {
        domNode = domNode.parentNode.parentNode
      } else {
        domNode = domNode.parentNode.querySelector('.opacity-slider')
      }
    }

    if (this.sliders.opacity.sliderNode === domNode) {
      return this.sliders.opacity
    }
  }

  getValueMin(slider) {
    return parseInt(slider.sliderNode.getAttribute('aria-valuemin'))
  }

  getValueNow(slider) {
    return parseInt(slider.sliderNode.getAttribute('aria-valuenow'))
  }

  getValueMax(slider) {
    return parseInt(slider.sliderNode.getAttribute('aria-valuemax'))
  }

  moveSliderTo(slider, value) {
    var pos, offsetX, valueWidth
    var valueMin = this.getValueMin(slider)
    var valueNow = this.getValueNow(slider)
    var valueMax = this.getValueMax(slider)

    value = Math.min(Math.max(value, valueMin), valueMax)

    valueNow = value
    slider.sliderNode.setAttribute('aria-valuenow', value)

    offsetX = Math.round(
      (valueNow * (this.railWidth - this.thumbWidth)) / (valueMax - valueMin)
    )

    pos = this.railX + offsetX

    slider.thumbNode.setAttribute('x', pos)
    slider.fillNode.setAttribute('width', offsetX + this.rectRadius)

    slider.valueNode.textContent = valueNow
    valueWidth = slider.valueNode.getBBox().width

    pos = this.railX + offsetX - (valueWidth - this.thumbWidth) / 2
    slider.valueNode.setAttribute('x', pos)

    pos = this.railX + offsetX - (this.focusWidth - this.thumbWidth) / 2
    slider.focusNode.setAttribute('x', pos)

    if (this.onUpdateCallback) {
      this.onUpdateCallback()
    }
  }

  onUpdate(onUpdateCallback) {
    this.onUpdateCallback = () => {
      const opacity = this.sliders.opacity.sliderNode.getAttribute('aria-valuenow')

      onUpdateCallback(opacity / 100)
    }
  }

  onSliderKeyDown(event) {
    var flag = false

    var slider = this.getSlider(event.currentTarget)

    var valueMin = this.getValueMin(slider)
    var valueNow = this.getValueNow(slider)
    var valueMax = this.getValueMax(slider)

    switch (event.key) {
      case 'Left':
      case 'ArrowLeft':
      case 'Down':
      case 'ArrowDown':
        this.moveSliderTo(slider, valueNow - 1)
        flag = true
        break

      case 'Right':
      case 'ArrowRight':
      case 'Up':
      case 'ArrowUp':
        this.moveSliderTo(slider, valueNow + 1)
        flag = true
        break

      case 'PageDown':
        this.moveSliderTo(slider, valueNow - 10)
        flag = true
        break

      case 'PageUp':
        this.moveSliderTo(slider, valueNow + 10)
        flag = true
        break

      case 'Home':
        this.moveSliderTo(slider, valueMin)
        flag = true
        break

      case 'End':
        this.moveSliderTo(slider, valueMax)
        flag = true
        break

      default:
        break
    }

    if (flag) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  onThumbPointerDown(event) {
    this.pointerSlider = this.getSlider(event.currentTarget)

    // Set focus to the clicked on
    this.pointerSlider.sliderNode.focus()

    event.preventDefault()
    event.stopPropagation()
  }

  onThumbPointerUp() {
    this.pointerSlider = false
  }

  onThumbPointerMove(event) {
    if (
      this.pointerSlider &&
      this.pointerSlider.sliderNode.contains(event.target)
    ) {
      let x = this.getSVGPoint(this.pointerSlider, event).x
      let min = this.getValueMin(this.pointerSlider)
      let max = this.getValueMax(this.pointerSlider)
      let diffX = x - this.railX
      let value = Math.round((diffX * (max - min)) / this.railWidth)
      this.moveSliderTo(this.pointerSlider, value)

      event.preventDefault()
      event.stopPropagation()
    }
  }

  // handle click event on the rail
  onRailClick(event) {
    var slider = this.getSlider(event.currentTarget)

    var x = this.getSVGPoint(slider, event).x
    var min = this.getValueMin(slider)
    var max = this.getValueMax(slider)
    var diffX = x - this.railX
    var value = Math.round((diffX * (max - min)) / this.railWidth)
    this.moveSliderTo(slider, value)

    event.preventDefault()
    event.stopPropagation()

    // Set focus to the clicked handle
    slider.sliderNode.focus()
  }
}

export { OpacitySlider }