import { terms } from './terms.js'
import { colours } from './colours.js'

const surfaceWaterStyleLayers = [
  ['Risk of Flooding from Surface Water Depth > 0mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 200mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 300mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 600mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 900mm/1', colours.nonFloodZone],
  ['Risk of Flooding from Surface Water Depth > 1200mm/1', colours.nonFloodZone]
]

const getFloodZoneCCGroupLayer = (getVectorTileUrl, VectorTileLayer) => {
  const floodZonesLayer = new VectorTileLayer({
    id: 'Flood_Zones_2_and_3_Rivers_and_Sea_OnCCP',
    url: getVectorTileUrl('Flood_Zones_2_and_3_Rivers_and_Sea'),
    opacity: 0.75,
    visible: false
  })

  const floodZonesCCLayer = new VectorTileLayer({
    id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    url: getVectorTileUrl('Flood_Zones_2_and_3_Rivers_and_Sea_CCP1'),
    opacity: 0.75,
    visible: false
  })

  // const floodZoneCCGroupLayer = new GroupLayer({
  //   id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
  //   opacity: 0.75,
  //   visible: false
  // })
  // floodZoneCCGroupLayer.add(floodZonesCCLayer)
  // floodZoneCCGroupLayer.add(floodZonesLayer)
  return [floodZonesCCLayer, floodZonesLayer]
}

const vtLayers = [
  {
    name: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    q:  window.FMP_MAP_VERSION === 1 ? 'fzfzcl' : 'fzcl',
    getVtLayer: getFloodZoneCCGroupLayer,
    styleLayers: [
      ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1', colours.floodZone2],
      ['Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1', colours.floodZone3],
      ['Flood Zones 2 and 3 Rivers and Sea CCP1/FZ2/1', colours.floodZoneCC],
      ['Flood Zones 2 and 3 Rivers and Sea CCP1/FZ3/1', colours.floodZoneCC],
      ['Flood Zones 2 and 3 Rivers and Sea CCP1/No Data/1', colours.floodZoneNoData]
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
  {
    name: 'Rivers_1_in_30_Sea_1_in_30_Defended',
    q: '',
    styleLayers: [['Rivers 1 in 30 Sea 1 in 30 Defended/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsHigh
  },
  {
    name: 'Rivers_1_in_30_Sea_1_in_30_Defended_Extents',
    q: '', // Implies disabled for now: WAS - q: 'rsdpdhr',
    styleLayers: [['Rivers 1 in 30 Sea 1 in 30 Defended Extents/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsHigh
  },
  {
    name: 'Rivers_1_in_100_Sea_1_in_200_Defended_Extents',
    q: '', // Implies disabled for now: WAS - q: 'rsdpdmr',
    styleLayers: [['Rivers 1 in 100 Sea 1 in 200 Defended Extents/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsMedium
  },
  {
    name: 'Rivers_1_in_100_Sea_1_in_200_Undefended_Extents',
    q: '', // Implies disabled for now: WAS - q: 'rsupdmr',
    styleLayers: [['Rivers 1 in 100 Sea 1 in 200 Undefended Extents/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsMedium
  },
  {
    name: 'Rivers_1_in_1000_Sea_1_in_1000_Defended_Extents',
    q: '', // Implies disabled for now: WAS - q: 'rsdpdlr',
    styleLayers: [['Rivers 1 in 1000 Sea 1 in 1000 Defended Extents/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsLow
  },
  {
    name: 'Rivers_1_in_1000_Sea_1_in_1000_Undefended_Extents',
    q: '', // Implies disabled for now: WAS - q: 'rsupdlr',
    styleLayers: [['Rivers 1 in 1000 Sea 1 in 1000 Undefended Extents/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsLow
  },
  {
    name: 'Rivers_1_in_30_Sea_1_in_30_Defended_CCP1',
    q: '', // Implies disabled for now
    styleLayers: [['Rivers 1 in 30 Sea 1 in 30 Defended CCP1/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsHigh
  },
  {
    name: 'Rivers_1_in_30_Sea_1_in_30_Defended_Extents_CCP1',
    q: '', // Implies disabled for now: WAS - q: 'rsdclhr',
    styleLayers: [['Rivers 1 in 30 Sea 1 in 30 Defended Extents CCP1/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsHigh
  },
  {
    name: 'Rivers_1_in_100_Sea_1_in_200_Defended_Extents_CCP1',
    q: '', // Implies disabled for now: WAS - q: 'rsdclmr',
    styleLayers: [['Rivers 1 in 100 Sea 1 in 200 Defended Extents CCP1/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsMedium
  },
  {
    name: 'Rivers_1_in_100_Sea_1_in_200_Undefended_Extents_CCP1',
    q: '', // Implies disabled for now: WAS - q: 'rsuclmr',
    styleLayers: [['Rivers 1 in 100 Sea 1 in 200 Undefended Extents CCP1/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsMedium
  },
  {
    name: 'Rivers_1_in_1000_Sea_1_in_1000_Defended_Extents_CCP1',
    q: '', // Implies disabled for now: WAS - q: 'rsdcllr',
    styleLayers: [['Rivers 1 in 1000 Sea 1 in 1000 Defended Extents CCP1/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsLow
  },
  {
    name: 'Rivers_1_in_1000_Sea_1_in_1000_Undefended_Extents_CCP1',
    q: '', // Implies disabled for now: WAS - q: 'rsucllr',
    styleLayers: [['Rivers 1 in 1000 Sea 1 in 1000 Undefended Extents CCP1/1', colours.nonFloodZone]],
    likelihoodchanceLabel: terms.likelihoodchance.rsLow
  },
  {
    name: 'Risk_of_Flooding_from_Surface_Water_Low',
    q: 'swlr',
    styleLayers: surfaceWaterStyleLayers,
    likelihoodchanceLabel: terms.likelihoodchance.swLow
  },
  {
    name: 'Risk_of_Flooding_from_Surface_Water_Medium',
    q: 'swmr',
    styleLayers: surfaceWaterStyleLayers,
    likelihoodchanceLabel: terms.likelihoodchance.swMedium
  },
  {
    name: 'Risk_of_Flooding_from_Surface_Water_High',
    q: 'swhr',
    styleLayers: surfaceWaterStyleLayers,
    likelihoodchanceLabel: terms.likelihoodchance.swHigh
  }
]

export { vtLayers }
