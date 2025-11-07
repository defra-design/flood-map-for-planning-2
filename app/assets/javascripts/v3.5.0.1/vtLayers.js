import { terms } from './terms.js'
import { colours } from './colours.js'

const surfaceWaterStyleLayers = [
  ['Risk of Flooding from Surface Water Depth > 0mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 200mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 300mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 600mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 900mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 1200mm/1', colours.nonFloodZone],
]
const surfaceWaterWithDepthStyleLayersLow = [
  ['Surface Water Spatial Planning 1 in 1000 Depths/>2300mm/1', colours.nonFloodZoneDepthBands[0]],
  ['Surface Water Spatial Planning 1 in 1000 Depths/1200-2300mm/1', colours.nonFloodZoneDepthBands[1]],
  ['Surface Water Spatial Planning 1 in 1000 Depths/900-1200mm/1', colours.nonFloodZoneDepthBands[2]],
  ['Surface Water Spatial Planning 1 in 1000 Depths/600-900mm/1', colours.nonFloodZoneDepthBands[3]],
  ['Surface Water Spatial Planning 1 in 1000 Depths/300-600mm/1', colours.nonFloodZoneDepthBands[4]],
  ['Surface Water Spatial Planning 1 in 1000 Depths/150-300mm/1', colours.nonFloodZoneDepthBands[5]],
  ['Surface Water Spatial Planning 1 in 1000 Depths/<150mm/1', colours.nonFloodZoneDepthBands[6]]
]

const surfaceWaterWithDepthStyleLayersMedium = [
  ['Surface Water Spatial Planning 1 in 100 Depths/>2300mm/1', colours.nonFloodZoneDepthBands[0]],
  ['Surface Water Spatial Planning 1 in 100 Depths/1200-2300mm/1', colours.nonFloodZoneDepthBands[1]],
  ['Surface Water Spatial Planning 1 in 100 Depths/900-1200mm/1', colours.nonFloodZoneDepthBands[2]],
  ['Surface Water Spatial Planning 1 in 100 Depths/600-900mm/1', colours.nonFloodZoneDepthBands[3]],
  ['Surface Water Spatial Planning 1 in 100 Depths/300-600mm/1', colours.nonFloodZoneDepthBands[4]],
  ['Surface Water Spatial Planning 1 in 100 Depths/150-300mm/1', colours.nonFloodZoneDepthBands[5]],
  ['Surface Water Spatial Planning 1 in 100 Depths/<150mm/1', colours.nonFloodZoneDepthBands[6]]
]

const surfaceWaterWithDepthStyleLayersHigh = [
  ['Surface Water Spatial Planning 1 in 30 Depths/>2300mm/1', colours.nonFloodZoneDepthBands[0]],
  ['Surface Water Spatial Planning 1 in 30 Depths/1200-2300mm/1', colours.nonFloodZoneDepthBands[1]],
  ['Surface Water Spatial Planning 1 in 30 Depths/900-1200mm/1', colours.nonFloodZoneDepthBands[2]],
  ['Surface Water Spatial Planning 1 in 30 Depths/600-900mm/1', colours.nonFloodZoneDepthBands[3]],
  ['Surface Water Spatial Planning 1 in 30 Depths/300-600mm/1', colours.nonFloodZoneDepthBands[4]],
  ['Surface Water Spatial Planning 1 in 30 Depths/150-300mm/1', colours.nonFloodZoneDepthBands[5]],
  ['Surface Water Spatial Planning 1 in 30 Depths/<150mm/1', colours.nonFloodZoneDepthBands[6]]
]

const surfaceWaterCCWithDepthStyleLayersLow = [
  ['Surface Water Spatial Planning 1 in 1000 CCP1 Depths/>2300mm/1', colours.nonFloodZoneDepthBands[0]],
  ['Surface Water Spatial Planning 1 in 1000 CCP1 Depths/1200-2300mm/1', colours.nonFloodZoneDepthBands[1]],
  ['Surface Water Spatial Planning 1 in 1000 CCP1 Depths/900-1200mm/1', colours.nonFloodZoneDepthBands[2]],
  ['Surface Water Spatial Planning 1 in 1000 CCP1 Depths/600-900mm/1', colours.nonFloodZoneDepthBands[3]],
  ['Surface Water Spatial Planning 1 in 1000 CCP1 Depths/300-600mm/1', colours.nonFloodZoneDepthBands[4]],
  ['Surface Water Spatial Planning 1 in 1000 CCP1 Depths/150-300mm/1', colours.nonFloodZoneDepthBands[5]],
  ['Surface Water Spatial Planning 1 in 1000 CCP1 Depths/<150mm/1', colours.nonFloodZoneDepthBands[6]]
]

const surfaceWaterCCWithDepthStyleLayersMedium = [
  ['Surface Water Spatial Planning 1 in 100 CCP1 Depths/>2300mm/1', colours.nonFloodZoneDepthBands[0]],
  ['Surface Water Spatial Planning 1 in 100 CCP1 Depths/1200-2300mm/1', colours.nonFloodZoneDepthBands[1]],
  ['Surface Water Spatial Planning 1 in 100 CCP1 Depths/900-1200mm/1', colours.nonFloodZoneDepthBands[2]],
  ['Surface Water Spatial Planning 1 in 100 CCP1 Depths/600-900mm/1', colours.nonFloodZoneDepthBands[3]],
  ['Surface Water Spatial Planning 1 in 100 CCP1 Depths/300-600mm/1', colours.nonFloodZoneDepthBands[4]],
  ['Surface Water Spatial Planning 1 in 100 CCP1 Depths/150-300mm/1', colours.nonFloodZoneDepthBands[5]],
  ['Surface Water Spatial Planning 1 in 100 CCP1 Depths/<150mm/1', colours.nonFloodZoneDepthBands[6]]
]

const surfaceWaterCCWithDepthStyleLayersHigh = [
  ['Surface Water Spatial Planning 1 in 30 CCP1 Depths/>2300mm/1', colours.nonFloodZoneDepthBands[0]],
  ['Surface Water Spatial Planning 1 in 30 CCP1 Depths/1200-2300mm/1', colours.nonFloodZoneDepthBands[1]],
  ['Surface Water Spatial Planning 1 in 30 CCP1 Depths/900-1200mm/1', colours.nonFloodZoneDepthBands[2]],
  ['Surface Water Spatial Planning 1 in 30 CCP1 Depths/600-900mm/1', colours.nonFloodZoneDepthBands[3]],
  ['Surface Water Spatial Planning 1 in 30 CCP1 Depths/300-600mm/1', colours.nonFloodZoneDepthBands[4]],
  ['Surface Water Spatial Planning 1 in 30 CCP1 Depths/150-300mm/1', colours.nonFloodZoneDepthBands[5]],
  ['Surface Water Spatial Planning 1 in 30 CCP1 Depths/<150mm/1', colours.nonFloodZoneDepthBands[6]]
]

const getFloodZoneCCGroupLayer = (getVectorTileUrl, VectorTileLayer, _GroupLayer) => {
  const floodZonesLayer = new VectorTileLayer({
    id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    url: getVectorTileUrl('Flood_Zones_2_and_3_Rivers_and_Sea'),
    opacity: 1,
    visible: false
    // visible: true // Add IN When GroupLayer can be made available
  })

  const floodZonesCCLayer = new VectorTileLayer({
    id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    url: getVectorTileUrl('Flood_Zones_2_and_3_Rivers_and_Sea_CCP1'),
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
  return [floodZonesCCLayer, floodZonesLayer]
}

const setFloodZoneCCGroupLayerStyles = (vectorTileLayer, isDark, opacity) => {
  // Show / Hide the image layer for Flood_Zones_2_and_3_Rivers_and_Sea_CCP1
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
}

const vtLayers = [
  {
    name: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    q: window.FMP_MAP_VERSION === 1 ? 'fzfzcl' : 'fzcl',
    getVtLayer: getFloodZoneCCGroupLayer,
    setStyleProperties: setFloodZoneCCGroupLayerStyles, // add in when GroupLayers
    styleLayers: [
      ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1', colours.floodZone2],
      ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1', colours.floodZone3],
      ['Flood Zones 2 and 3 Rivers and Sea CCP1/Flood Zones plus climate change/1', colours.floodZoneCC]
    ]
  },
  {
    name: 'Flood_Zones_2_and_3_Rivers_and_Sea',
    q: window.FMP_MAP_VERSION === 1 ? 'fzfzpd' : 'fzpd',
    styleLayers: [
      ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1', colours.floodZone2],
      ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1', colours.floodZone3]
    ]
  },
  // Retaining this commented out, as will inevitably be reinstated and
  // want to keep it in mind during any refactors
  // {
  //   name: 'Rivers_1_in_30_Sea_1_in_30_Defended',
  //   q: '', // Implies disabled for now
  //   styleLayers: [['Rivers 1 in 30 Sea 1 in 30 Defended/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsHigh,
  //   additionalInfo: terms.additionalInfo.rsHighDefended
  // },
  // {
  //   name: 'Rivers_1_in_30_Sea_1_in_30_Defended_Extents',
  //   q: 'rsdpdhr',
  //   styleLayers: [['Rivers 1 in 30 Sea 1 in 30 Defended Extents/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsHigh,
  //   additionalInfo: terms.additionalInfo.rsHighDefended
  // },
  // {
  //   name: 'Rivers_1_in_100_Sea_1_in_200_Defended_Extents',
  //   q: 'rsdpdmr',
  //   styleLayers: [['Rivers 1 in 100 Sea 1 in 200 Defended Extents/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsMedium,
  //   additionalInfo: terms.additionalInfo.rsMedium
  // },
  // {
  //   name: 'Rivers_1_in_100_Sea_1_in_200_Undefended_Extents',
  //   q: 'rsupdmr',
  //   styleLayers: [['Rivers 1 in 100 Sea 1 in 200 Undefended Extents/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsMedium,
  //   additionalInfo: terms.additionalInfo.rsMedium
  // },
  // {
  //   name: 'Rivers_1_in_1000_Sea_1_in_1000_Defended_Extents',
  //   q: 'rsdpdlr',
  //   styleLayers: [['Rivers 1 in 1000 Sea 1 in 1000 Defended Extents/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsLow,
  //   additionalInfo: terms.additionalInfo.rsLow
  // },
  // {
  //   name: 'Rivers_1_in_1000_Sea_1_in_1000_Undefended_Extents',
  //   q: 'rsupdlr',
  //   styleLayers: [['Rivers 1 in 1000 Sea 1 in 1000 Undefended Extents/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsLow,
  //   additionalInfo: terms.additionalInfo.rsLow
  // },
  // {
  //   name: 'Rivers_1_in_30_Sea_1_in_30_Defended_CCP1',
  //   q: '', // Implies disabled for now
  //   styleLayers: [['Rivers 1 in 30 Sea 1 in 30 Defended CCP1/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsHigh,
  //   additionalInfo: terms.additionalInfo.rsHighDefended
  // },
  // {
  //   name: 'Rivers_1_in_30_Sea_1_in_30_Defended_Extents_CCP1',
  //   q: 'rsdclhr',
  //   styleLayers: [['Rivers 1 in 30 Sea 1 in 30 Defended Extents CCP1/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsHigh,
  //   additionalInfo: terms.additionalInfo.rsHighDefended
  // },
  // {
  //   name: 'Rivers_1_in_100_Sea_1_in_200_Defended_Extents_CCP1',
  //   q: 'rsdclmr',
  //   styleLayers: [['Rivers 1 in 100 Sea 1 in 200 Defended Extents CCP1/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsMedium,
  //   additionalInfo: terms.additionalInfo.rsMedium
  // },
  // {
  //   name: 'Rivers_1_in_100_Sea_1_in_200_Undefended_Extents_CCP1',
  //   q: 'rsuclmr',
  //   styleLayers: [['Rivers 1 in 100 Sea 1 in 200 Undefended Extents CCP1/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsMedium,
  //   additionalInfo: terms.additionalInfo.rsMedium
  // },
  // {
  //   name: 'Rivers_1_in_1000_Sea_1_in_1000_Defended_Extents_CCP1',
  //   q: 'rsdcllr',
  //   styleLayers: [['Rivers 1 in 1000 Sea 1 in 1000 Defended Extents CCP1/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsLow,
  //   additionalInfo: terms.additionalInfo.rsLow
  // },
  // {
  //   name: 'Rivers_1_in_1000_Sea_1_in_1000_Undefended_Extents_CCP1',
  //   q: 'rsucllr',
  //   styleLayers: [['Rivers 1 in 1000 Sea 1 in 1000 Undefended Extents CCP1/1', colours.nonFloodZone]],
  //   likelihoodchanceLabel: terms.likelihoodchance.rsLow,
  //   additionalInfo: terms.additionalInfo.rsLow
  // },
  {
    name: 'Surface_Water_Spatial_Planning_1_in_1000_Depths',
    q: 'swpdlr',
    styleLayers: surfaceWaterWithDepthStyleLayersLow,
    likelihoodchanceLabel: terms.likelihoodchance.swLow
  },
  {
    name: 'Surface_Water_Spatial_Planning_1_in_100_Depths',
    q: 'swpdmr',
    styleLayers: surfaceWaterWithDepthStyleLayersMedium,
    likelihoodchanceLabel: terms.likelihoodchance.swMedium
  },
  {
    name: 'Surface_Water_Spatial_Planning_1_in_30_Depths',
    q: 'swpdhr',
    styleLayers: surfaceWaterWithDepthStyleLayersHigh,
    likelihoodchanceLabel: terms.likelihoodchance.swHigh
  },
  {
    name: 'Surface_Water_Spatial_Planning_1_in_1000_CCP1_Depths',
    q: 'swcllr',
    styleLayers: surfaceWaterCCWithDepthStyleLayersLow,
    likelihoodchanceLabel: terms.likelihoodchance.swLow
  },
  {
    name: 'Surface_Water_Spatial_Planning_1_in_100_CCP1_Depths',
    q: 'swclmr',
    styleLayers: surfaceWaterCCWithDepthStyleLayersMedium,
    likelihoodchanceLabel: terms.likelihoodchance.swMedium
  },
  {
    name: 'Surface_Water_Spatial_Planning_1_in_30_CCP1_Depths',
    q: 'swclhr',
    styleLayers: surfaceWaterCCWithDepthStyleLayersHigh,
    likelihoodchanceLabel: terms.likelihoodchance.swHigh
  }
]

export { vtLayers }
