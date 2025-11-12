import { FloodMapLayer } from './floodMapLayer.js'
import { colours } from '../../v3.5.0.1/colours.js'

class FloodZoneCCLayer extends FloodMapLayer {
  constructor () {
    super({
      name: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
      q: 'fzfzcl',
      styleLayers: [
        ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1', colours.floodZone2],
        ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1', colours.floodZone3],
        ['Flood Zones 2 and 3 Rivers and Sea CCP1/Flood Zones plus climate change/1', colours.floodZoneCC]
      ],
      logStyles: false
    })
    this.floodZonesCCNodDataStandardLayerName = 'Flood Zones 2 and 3 Rivers and Sea CCP1/Unavailable/1'
    this.floodZonesCCNodDataDarkLayerName = 'Flood Zones 2 and 3 Rivers and Sea CCP1/Unavailable/2'
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
    map.add(floodZonesLayer)
    this.vectorTileLayer = floodZonesLayer
    this.floodZonesCCLayer = floodZonesCCLayer
  }

  setNoDataBorderOpacity (opacity) {
    const lineStyleLayerName = 'Flood Zones 2 and 3 Rivers and Sea CCP1/Unavailable/0'
    const lineLayerPaintProperties = this.floodZonesCCLayer.getPaintProperties(lineStyleLayerName)
    if (lineLayerPaintProperties) {
      const lineColour = colours.floodZoneNoData[this.isDark ? 1 : 0]
      lineLayerPaintProperties['line-color'] = lineColour
      lineLayerPaintProperties['line-opacity'] = opacity
      this.floodZonesCCLayer.setPaintProperties(lineStyleLayerName, lineLayerPaintProperties)
    }
  }

  setFloodZoneCCStyleProperties (opacity) {
    const styleLayerName = 'Flood Zones 2 and 3 Rivers and Sea CCP1/Flood Zones plus climate change/1'
    const layerPaintProperties = this.floodZonesCCLayer.getPaintProperties(styleLayerName)
    const paintProperties = colours.floodZoneCC
    if (layerPaintProperties) {
      const fillColour = paintProperties[this.isDark ? 1 : 0]
      layerPaintProperties['fill-color'] = fillColour
      layerPaintProperties['fill-opacity'] = this.isStyleLayerVisible(this.mapState.segments) ? opacity : 0
      this.floodZonesCCLayer.setPaintProperties(styleLayerName, layerPaintProperties)
    }
  }

  setNoDataFillOpacity (layerName, opacity) {
    const paintProperties = this.floodZonesCCLayer.getPaintProperties(layerName)
    paintProperties['fill-opacity'] = opacity
    this.floodZonesCCLayer.setPaintProperties(layerName, paintProperties)
  }

  setStyleProperties (opacity) {
    // Set style properties of the standard flood zone layer using the parent class
    super.setStyleProperties(opacity)
    // Show and hide the floodZonesCCLayer "no data" standard/dark mode style layers as applicable
    this.floodZonesCCLayer.setStyleLayerVisibility(this.floodZonesCCNodDataStandardLayerName, this.isDark ? 'none' : 'visible')
    this.floodZonesCCLayer.setStyleLayerVisibility(this.floodZonesCCNodDataDarkLayerName, this.isDark ? 'visible' : 'none')

    this.setNoDataFillOpacity(this.floodZonesCCNodDataStandardLayerName, opacity)
    this.setNoDataFillOpacity(this.floodZonesCCNodDataDarkLayerName, opacity)

    // Set the style properties for the floodZonesCCLayer "no data" border
    this.setNoDataBorderOpacity(opacity)
    // Now set the style for the FZ Climate Change Layer
    this.setFloodZoneCCStyleProperties(opacity)
  }

  set visible (visible) {
    this.floodZonesCCLayer.visible = visible
    this.vectorTileLayer.visible = visible
  }

  get visible () {
    return this.floodZonesCCLayer.visible && this.vectorTileLayer.visible
  }

  logStyleLayers () {
    console.log('\nFloodZones styles:')
    this.logStyleLayer(this.vectorTileLayer)
    console.log('\nFloodZonesCCLayer styles:')
    this.logStyleLayer(this.floodZonesCCLayer)
    this.logStyles = false
  }
}
export { FloodZoneCCLayer }
