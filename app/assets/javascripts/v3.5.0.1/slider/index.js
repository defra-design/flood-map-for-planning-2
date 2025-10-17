import sliderMarkUp from './slider.html.js'
import { ColorViewerSliders } from './slider.js'
const id = 'opacity-control'
let opacitySlider
let onUpdateOpacity
let initialOpacity

const observer = new window.MutationObserver((mutations) => {
  // addedNodes is an array of NodeLists, which is an array of Nodes
  const addedNodes = [...mutations.map(({ addedNodes: sonarAddedNodes }) => sonarAddedNodes)]
  const sliderElement = addedNodes.reduce((sliderNode, nodeList) => {
    sliderNode = sliderNode || [...nodeList].reduce((childSliderNode, node) => {
      childSliderNode = childSliderNode || node.querySelector('#opacity-control')
      return childSliderNode
    }, null)
    return sliderNode
  }, null)
  if (sliderElement) {
    createOpacitySlider(sliderElement)
  }
})

const createOpacitySlider = (sliderElement, opacity) => {
  opacitySlider = new ColorViewerSliders(sliderElement, opacity)
  opacitySlider.init()
  opacitySlider.onUpdate(onUpdateOpacity)
}

const initialiseSlider =  (callback, opacity) => {
  onUpdateOpacity = callback
  initialOpacity = opacity
  const sliderElement = document.getElementById(id)
  if (sliderElement) { // desktop element should exist
    createOpacitySlider(sliderElement, initialOpacity)
  } else { // mobile requires an observer
    const mapMiddleElement = document.querySelector('.fm-o-middle')
    observer.observe(mapMiddleElement, { attributes: false, childList: true, characterData: false, subtree: false })
  }
}

export { sliderMarkUp, initialiseSlider }