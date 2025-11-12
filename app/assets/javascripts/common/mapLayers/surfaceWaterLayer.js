import { FloodMapLayer } from './floodMapLayer.js'
import { colours } from '../../v3.5.0.1/colours.js'

class SurfaceWaterLayer extends FloodMapLayer {
  getFillColour (paintProperties) {
    const { segments } = this.mapState
    if (segments.includes('depthAll')) {
      return paintProperties[this.isDark ? 1 : 0]
    }
    return colours.nonFloodZone[this.isDark ? 1 : 0]
  }
}

export { SurfaceWaterLayer }
