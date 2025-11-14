import sliderMarkUp from './slider.html.js'
import { OpacitySlider } from './slider.js'
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
    createOpacitySlider(sliderElement, initialOpacity)
  }
})

const createOpacitySlider = (sliderElement, opacity) => {
  opacitySlider = new OpacitySlider(sliderElement, opacity)
  opacitySlider.init()
  opacitySlider.onUpdate(onUpdateOpacity)
}

const initialiseSlider = (mapComponentCallback, opacity) => {
  initialOpacity = opacity
  onUpdateOpacity = (opacity) => {
    initialOpacity = opacity
    mapComponentCallback(opacity)
  }
  const sliderElement = document.getElementById(id)

  let opacityContainer = '.fm-o-side' // On non-mobile sliderElement is in the fm-o-side element
  if (sliderElement) { // desktop element should exist
    createOpacitySlider(sliderElement, initialOpacity)
  } else { // On mobile sliderElement is in the fm-o-middle element
    opacityContainer = '.fm-o-middle'
  }
  // Now create an observer that will re-create the slider every time it goes.
  const mapOpacityContainer = document.querySelector(opacityContainer)
  observer.observe(mapOpacityContainer, { attributes: false, childList: true, characterData: false, subtree: false })
}

export { sliderMarkUp, initialiseSlider }
