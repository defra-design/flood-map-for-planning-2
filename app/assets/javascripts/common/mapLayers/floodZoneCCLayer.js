import { FloodMapLayer } from './floodMapLayer.js'
import { colours } from '../../v3.5.0.1/colours.js'

class FloodZoneCCLayer extends FloodMapLayer {
  constructor () {
    super({
      name: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
      q: window.FMP_MAP_VERSION === 1 ? 'fzfzcl' : 'fzcl',
      // getVtLayer: getFloodZoneCCGroupLayer,
      // setStyleProperties: setFloodZoneCCGroupLayerStyles, // add in when GroupLayers
      styleLayers: [
        ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1', colours.floodZone2],
        ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1', colours.floodZone3],
        ['Flood Zones 2 and 3 Rivers and Sea CCP1/Flood Zones plus climate change/1', colours.floodZoneCC]
      ]
    })
  }

  addToMap (map) {
    const { VectorTileLayer } = FloodMapLayer.modules
    const floodZonesLayer = new VectorTileLayer({
      id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
      url: this.getVectorTileUrl('Flood_Zones_2_and_3_Rivers_and_Sea'),
      opacity: 1,
      visible: false
      // visible: true // Add IN When GroupLayer can be made available
    })

    const floodZonesCCLayer = new VectorTileLayer({
      id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
      url: this.getVectorTileUrl('Flood_Zones_2_and_3_Rivers_and_Sea_CCP1'),
      opacity: 1,
      visible: false
      // visible: true // Add IN When GroupLayer can be made available
    })

    // const floodZoneCCGroupLayer = new GroupLayer({
    //   id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    //   opacity: 0.75,
    //   visible: false
    // })
    // floodZoneCCGroupLayer.add(floodZonesCCLayer)
    // floodZoneCCGroupLayer.add(floodZonesLayer)
    // return floodZoneCCGroupLayer
    map.add(floodZonesCCLayer)
    map.add(floodZonesCCLayer)
    this.vectorTileLayer = [floodZonesCCLayer, floodZonesLayer]
  }

  setStyleProperties (isDark, opacity) {
    // Show / Hide the image layer for Flood_Zones_2_and_3_Rivers_and_Sea_CCP1
    this.vectorTileLayer.forEach((vectorTileLayer) => {
      vectorTileLayer.setStyleLayerVisibility('Flood Zones 2 and 3 Rivers and Sea CCP1/Unavailable/1', isDark ? 'none' : 'visible')
      vectorTileLayer.setStyleLayerVisibility('Flood Zones 2 and 3 Rivers and Sea CCP1/Unavailable/2', isDark ? 'visible' : 'none')
      const lineStyleLayerName = 'Flood Zones 2 and 3 Rivers and Sea CCP1/Unavailable/0'
      const lineLayerPaintProperties = vectorTileLayer.getPaintProperties(lineStyleLayerName)
      if (lineLayerPaintProperties) {
        const lineColour = colours.floodZoneNoData[isDark ? 1 : 0]
        lineLayerPaintProperties['line-color'] = lineColour
        lineLayerPaintProperties['line-opacity'] = opacity
        vectorTileLayer.setPaintProperties(lineStyleLayerName, lineLayerPaintProperties)
      }
    })
  }

  set visible (visible) {
    this.vectorTileLayer.forEach((vectorTileLayer) => {
      vectorTileLayer.visible = visible
    })
  }

  get visible () {
    return this.vectorTileLayer.find((vectorTileLayer) => vectorTileLayer.visible)
  }
}
export { FloodZoneCCLayer }
