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

const getFloodZoneCCGroupLayer = (getVectorTileUrl, VectorTileLayer, GroupLayer) => {
  const floodZonesLayer = new VectorTileLayer({
    id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    url: getVectorTileUrl('Flood_Zones_2_and_3_Rivers_and_Sea'),
    visible: true
  })

  const floodZonesCCLayer = new VectorTileLayer({
    id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    url: getVectorTileUrl('Flood_Zones_2_and_3_Rivers_and_Sea_CCP1'),
    visible: true
  })

  const floodZoneCCGroupLayer = new GroupLayer({
    id: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
    opacity: 0.75,
    visible: false
  })
  floodZoneCCGroupLayer.add(floodZonesCCLayer)
  floodZoneCCGroupLayer.add(floodZonesLayer)
  return floodZoneCCGroupLayer
}

  const vtLayers = [
    {
      name: 'Flood_Zones_2_and_3_Rivers_and_Sea',
      q: window.FMP_MAP_VERSION === 1 ? 'fzfzpd' : 'fzpd',
      styleLayers: [
        'Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1',
        'Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1'
      ]
    },
    {
      name: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
      q:  window.FMP_MAP_VERSION === 1 ? 'fzfzcl' : 'fzcl',
      styleLayers: [
        'Flood Zones 2 and 3 Rivers and Sea CCP1/FZ2/1',
        'Flood Zones 2 and 3 Rivers and Sea CCP1/FZ3/1',
        'Flood Zones 2 and 3 Rivers and Sea CCP1/No Data/1'
      ]
    },
    {
      name: 'Rivers_1_in_30_Sea_1_in_30_Defended',
      q: '',
      styleLayers: ['Rivers 1 in 30 Sea 1 in 30 Defended/1'],
      //likelihoodLabel: terms.likelihood.rsHigh,
      //chanceLabel: terms.chance.rsHigh
      likelihoodchanceLabel: terms.likelihood.rsHigh,
    },
    {
      name: 'Rivers_1_in_30_Sea_1_in_30_Defended_Depth',
      q: '',
      //q: 'rsdpdhr',
      styleLayers: ['Rivers 1 in 30 Sea 1 in 30 Defended Depth/1'],
      //likelihoodLabel: terms.likelihood.rsHigh,
      //chanceLabel: terms.chance.rsHigh
      likelihoodchanceLabel: terms.likelihoodchance.rsHigh
    },
    {
      name: 'Rivers_1_in_100_Sea_1_in_200_Defended_Depth',
      q: '',
      //q: 'rsdpdmr',
      styleLayers: ['Rivers 1 in 100 Sea 1 in 200 Defended Depth/1'],
      //likelihoodLabel: terms.likelihood.rsMedium,
      //chanceLabel: terms.chance.rsMedium
      likelihoodchanceLabel: terms.likelihoodchance.rsMedium
    },
    {
      name: 'Rivers_1_in_100_Sea_1_in_200_Undefended_Depth',
      //q: 'rsupdmr',
      q: '',
      styleLayers: ['Rivers 1 in 100 Sea 1 in 200 Undefended Depth/1'],
      //likelihoodLabel: terms.likelihood.rsMedium,
      //chanceLabel: terms.chance.rsMedium
      likelihoodchanceLabel: terms.likelihoodchance.rsMedium
    },
    {
      name: 'Rivers_1_in_1000_Sea_1_in_1000_Defended_Depth',
      //q: 'rsdpdlr',
      q: '',
      styleLayers: ['Rivers 1 in 1000 Sea 1 in 1000 Defended Depth/1'],
      //likelihoodLabel: terms.likelihood.rsLow,
      //chanceLabel: terms.chance.rsLow
      likelihoodchanceLabel: terms.likelihoodchance.rsLow
    },
    {
      name: 'Rivers_1_in_1000_Sea_1_in_1000_Undefended_Depth',
      //q: 'rsupdlr',
      q: '',
      styleLayers: ['Rivers 1 in 1000 Sea 1 in 1000 Undefended Depth/1'],
      //likelihoodLabel: terms.likelihood.rsLow,
      //chanceLabel: terms.chance.rsLow
      likelihoodchanceLabel: terms.likelihoodchance.rsLow
    },
    {
      name: 'Rivers_1_in_30_Sea_1_in_30_Defended_CCP1',
      q: '',
      styleLayers: ['Rivers 1 in 30 Sea 1 in 30 Defended CCP1/1'],
      //likelihoodLabel: terms.likelihood.rsHigh,
      //chanceLabel: terms.chance.rsHigh
      likelihoodchanceLabel: terms.likelihoodchance.rsHigh
    },
    {
      name: 'Rivers_1_in_30_Sea_1_in_30_Defended_Depth_CCP1',
      //q: 'rsdclhr',
      q: '',
      styleLayers: ['Rivers 1 in 30 Sea 1 in 30 Defended Depth CCP1/1'],
      //likelihoodLabel: terms.likelihood.rsHigh,
      //chanceLabel: terms.chance.rsHigh
      likelihoodchanceLabel: terms.likelihoodchance.rsHigh
    },
    {
      name: 'Rivers_1_in_100_Sea_1_in_200_Defended_Depth_CCP1',
      //q: 'rsdclmr',
      q: '',
      styleLayers: ['Rivers 1 in 100 Sea 1 in 200 Defended Depth CCP1/1'],
      //likelihoodLabel: terms.likelihood.rsMedium,
      //chanceLabel: terms.chance.rsMedium
      likelihoodchanceLabel: terms.likelihoodchance.rsMedium
    },
    {
      name: 'Rivers_1_in_100_Sea_1_in_200_Undefended_Depth_CCP1',
      //: 'rsuclmr',
      q: '',
      styleLayers: ['Rivers 1 in 100 Sea 1 in 200 Undefended Depth CCP1/1'],
      //likelihoodLabel: terms.likelihood.rsMedium,
      //chanceLabel: terms.chance.rsMedium
      likelihoodchanceLabel: terms.likelihoodchance.rsMedium
    },
    {
      name: 'Rivers_1_in_1000_Sea_1_in_1000_Defended_Depth_CCP1',
      //q: 'rsdcllr',
      q: '',
      styleLayers: ['Rivers 1 in 1000 Sea 1 in 1000 Defended Depth CCP1/1'],
      //likelihoodLabel: terms.likelihood.rsLow,
      //chanceLabel: terms.chance.rsLow
      likelihoodchanceLabel: terms.likelihoodchance.rsLow
    },
    {
      name: 'Rivers_1_in_1000_Sea_1_in_1000_Undefended_Depth_CCP1',
      //q: 'rsucllr',
      q: '',
      styleLayers: ['Rivers 1 in 1000 Sea 1 in 1000 Undefended Depth CCP1/1'],
      //likelihoodLabel: terms.likelihood.rsLow,
      //chanceLabel: terms.chance.rsLow
      likelihoodchanceLabel: terms.likelihoodchance.rsLow
    },
    {
      name: 'Risk_of_Flooding_from_Surface_Water_Low',
      q: 'swlr',
      styleLayers: surfaceWaterStyleLayers,
      //likelihoodLabel: terms.likelihood.swLow,
      //chanceLabel: terms.chance.swLow
      likelihoodchanceLabel: terms.likelihoodchance.swLow
    },
    {
      name: 'Risk_of_Flooding_from_Surface_Water_Medium',
      q: 'swmr',
      styleLayers: surfaceWaterStyleLayers,
      //likelihoodLabel: terms.likelihood.swMedium,
      //chanceLabel: terms.chance.swMedium
      likelihoodchanceLabel: terms.likelihoodchance.swMedium
    },
    {
      name: 'Risk_of_Flooding_from_Surface_Water_High',
      q: 'swhr',
     styleLayers: surfaceWaterStyleLayers,
     // likelihoodLabel: terms.likelihood.swHigh,
    //chanceLabel: terms.chance.swHigh,
      likelihoodchanceLabel: terms.likelihoodchance.swHigh
    }
  ]

export { vtLayers }
