import sliderMarkUp from './slider.html.js'
import { ColorViewerSliders } from './slider.js'

const initialiseSlider =  () => {
  var cps = document.querySelectorAll('.color-viewer-sliders');
  for (let i = 0; i < cps.length; i++) {
    let s = new ColorViewerSliders(cps[i]);
    s.init();
  }
}

export { sliderMarkUp, initialiseSlider }