import sliderMarkUp from './slider.html.js'
import { ColorViewerSliders } from './slider.js'

const initialiseSlider =  (id = 'opacity-control') => {
  const sliderElement = document.getElementById(id)
  const opacitySlider = new ColorViewerSliders(sliderElement)
  opacitySlider.init()
  return opacitySlider
}

export { sliderMarkUp, initialiseSlider }