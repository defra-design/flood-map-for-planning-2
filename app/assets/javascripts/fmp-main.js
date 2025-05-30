// /flood-map Path defined as an alias to npm or submodule version in webpack alias
// import { FloodMap } from '/flood-map' // eslint-disable-line import/no-absolute-path
const FloodMap = defra.FloodMap
let VectorTileLayer, FeatureLayer, Point
import { getEsriToken, getRequest, getInterceptors, getDefraMapConfig } from './tokens.js'
import { renderInfo, renderList } from './infoRenderer.js'
import { terms } from './terms.js'
import { colours, getKeyItemFill, LIGHT_INDEX, DARK_INDEX } from './colours.js'

let visibleVtLayer
const symbols = {
  waterStorageAreas: '/public/images/water-storage.svg',
  floodDefences: '/public/images/flood-defence.svg',
  mainRivers: '/public/images/main-rivers.svg',
  noData: '/public/images/no-data.svg',
}

const keyItemDefinitions = {
  floodZone2: {
    // id: 'fz2',
    label: 'Flood zone 2',
    fill: getKeyItemFill(colours.floodZone2)
  },
  floodZone3: {
    // id: 'fz2',
    label: 'Flood zone 3',
    fill: getKeyItemFill(colours.floodZone3)
  },
  // floodZone2CC: {
  //   // id: 'fz2',
  //   label: 'Flood zone 2 (2070 to 2125)',
  //   fill: getKeyItemFill(colours.floodZone3)
  // },
  floodZone3CC: {
    // id: 'fz2',
    label: "Flood zones plus climate change",
    fill: getKeyItemFill(colours.floodZone2and3)
  },
  floodZoneNoData: {
    // id: 'fz2',
    label: 'No data available',
    // icon: symbols.noData,
    fill: getKeyItemFill(colours.floodZoneNoData)
  },
  waterStorageAreas: {
    id: 'fsa',
    label: 'Water storage',
    icon: symbols.waterStorageAreas,
    fill: getKeyItemFill(colours.waterStorageAreas)
  },
  floodDefences: {
    id: 'fd',
    label: 'Flood defence',
    icon: symbols.floodDefences,
    fill: getKeyItemFill(colours.floodDefences)
  },
  mainRivers: {
    id: 'mainr',
    label: 'Main Rivers',
    icon: symbols.mainRivers,
    fill: getKeyItemFill(colours.mainRivers)
  },
  floodExtents: {
    // id: 'fz2',
    label: 'Flood extent',
    fill: getKeyItemFill(colours.floodExtents)
  }
}

// floodZoneSymbolIndex is used to infer the _symbol value sent to the query feature when a layer is clicked
// we believe it depends on the order of the styles that are set on the flood zones vector tile layer
// and it is used to infer the flood zone that has been clicked on by a user.
// On a previous data set, these values were in the reverse order so we need to verify that they remain correct
// after a data upload to arcGis
// Also the climateChange data is the opposite way round from the non climatechange one 
// And  the feature sometimes contains flood_zone
// So this is the best attempt at infering the flood zone correctly
const floodZoneSymbolIndex = ['3', '2']
//const floodZoneCCSymbolIndex = ['2', '3', 'No data available']
const floodZoneCCSymbolIndex = ['2', '3']

const getFloodZoneFromFeature = (feature, mapState) => { 
  if(feature.flood_zone === 'FZ2'){ return '2'}
  if(feature.flood_zone === 'FZ3'){ return '3'}
  //if(feature.flood_zone){ return 'No data available'}
  const symbolIndex = mapState?.isClimateChange ? floodZoneCCSymbolIndex : floodZoneSymbolIndex
  return symbolIndex[feature._symbol]
}

const surfaceWaterStyleLayers = [
  'Risk of Flooding from Surface Water Depth > 0mm/1',
  'Risk of Flooding from Surface Water Depth > 200mm/1',
  'Risk of Flooding from Surface Water Depth > 300mm/1',
  'Risk of Flooding from Surface Water Depth > 600mm/1',
  'Risk of Flooding from Surface Water Depth > 900mm/1',
  'Risk of Flooding from Surface Water Depth > 1200mm/1'
]

getDefraMapConfig().then((defraMapConfig) => {

  // Temp fix until 0.5.0
  // Map will not load if localStorage basemap is not one of default OR dark
  // but 0.3.0 sets the value to 'default,light', which screws up
  // the map component after an upgrade to 0.4.0
  const basemap = window.localStorage.getItem('basemap')
  if (basemap !== 'default' && basemap !== 'dark') {
    window.localStorage.removeItem('basemap')
  }

  const getVectorTileUrl = (layerName) => `${defraMapConfig.agolVectorTileUrl}/${layerName + defraMapConfig.layerNameSuffix}/VectorTileServer`
  const getFeatureLayerUrl = (urlLayerName) => `${defraMapConfig.agolServiceUrl}/${urlLayerName}/FeatureServer`
  const getModelFeatureLayerUrl = (layerName) => `${defraMapConfig.agolServiceUrl}/${layerName + defraMapConfig.layerNameSuffix}/FeatureServer`
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

  const paintProperties = {
    'Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1': colours.floodZone2,
    'Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1': colours.floodZone3,
    'Flood Zones 2 and 3 Rivers and Sea CCP1/FZ2/1': colours.floodZone2and3,
    'Flood Zones 2 and 3 Rivers and Sea CCP1/FZ3/1': colours.floodZone2and3,
    'Flood Zones 2 and 3 Rivers and Sea CCP1/No Data/1': colours.floodZoneNoData,
    'Rivers 1 in 30 Sea 1 in 30 Defended/1': colours.nonFloodZone,
    'Rivers 1 in 30 Sea 1 in 30 Defended Depth/1': colours.nonFloodZone,
    'Rivers 1 in 100 Sea 1 in 200 Defended Depth/1': colours.nonFloodZone,
    'Rivers 1 in 100 Sea 1 in 200 Undefended Depth/1': colours.nonFloodZone,
    'Rivers 1 in 1000 Sea 1 in 1000 Defended Depth/1': colours.nonFloodZone,
    'Rivers 1 in 1000 Sea 1 in 1000 Undefended Depth/1': colours.nonFloodZone,
    'Rivers 1 in 30 Sea 1 in 30 Defended CCP1/1': colours.nonFloodZone,
    'Rivers 1 in 30 Sea 1 in 30 Defended Depth CCP1/1': colours.nonFloodZone,
    'Rivers 1 in 100 Sea 1 in 200 Defended Depth CCP1/1': colours.nonFloodZone,
    'Rivers 1 in 100 Sea 1 in 200 Undefended Depth CCP1/1': colours.nonFloodZone,
    'Rivers 1 in 1000 Sea 1 in 1000 Defended Depth CCP1/1': colours.nonFloodZone,
    'Rivers 1 in 1000 Sea 1 in 1000 Undefended Depth CCP1/1': colours.nonFloodZone,
    [surfaceWaterStyleLayers[0]]: colours.nonFloodZone,
    [surfaceWaterStyleLayers[1]]: colours.nonFloodZone,
    [surfaceWaterStyleLayers[2]]: colours.nonFloodZone,
    [surfaceWaterStyleLayers[3]]: colours.nonFloodZone,
    [surfaceWaterStyleLayers[4]]: colours.nonFloodZone,
    [surfaceWaterStyleLayers[5]]: colours.nonFloodZone
    // 'Risk of Flooding from Surface Water Depth > 0mm/1': [nonFloodZoneDepthBandsLight[6], nonFloodZoneDepthBandsDark[6]],
    // 'Risk of Flooding from Surface Water Depth > 200mm/1': [nonFloodZoneDepthBandsLight[5], nonFloodZoneDepthBandsDark[5]],
    // 'Risk of Flooding from Surface Water Depth > 300mm/1': [nonFloodZoneDepthBandsLight[4], nonFloodZoneDepthBandsDark[4]],
    // 'Risk of Flooding from Surface Water Depth > 600mm/1': [nonFloodZoneDepthBandsLight[3], nonFloodZoneDepthBandsDark[3]],
    // 'Risk of Flooding from Surface Water Depth > 900mm/1': [nonFloodZoneDepthBandsLight[2], nonFloodZoneDepthBandsDark[2]],
    // 'Risk of Flooding from Surface Water Depth > 1200mm/1': [nonFloodZoneDepthBandsLight[1], nonFloodZoneDepthBandsDark[1]]
  }

  const mapFeatureRenderers = {
    floodDefences: {
      default: {
        type: 'simple',
        symbol: {
          type: 'simple-line',
          width: '3px',
          color: colours.floodDefences[LIGHT_INDEX]
        }
      },
      dark: {
        type: 'simple',
        symbol: {
          type: 'simple-line',
          width: '3px',
          color: colours.floodDefences[DARK_INDEX]
        }
      }
    },
    waterStorageAreas: {
      default: {
        type: 'simple',
        symbol: {
          type: 'simple-fill',
          style: 'diagonal-cross',
          color: colours.waterStorageAreas[LIGHT_INDEX],
          outline: {
            color: colours.waterStorageAreas[LIGHT_INDEX],
            width: 1
          }
        }
      },
      dark: {
        type: 'simple',
        symbol: {
          type: 'simple-fill',
          style: 'diagonal-cross',
          color: colours.waterStorageAreas[DARK_INDEX],
          outline: {
            color: colours.waterStorageAreas[DARK_INDEX],
            width: 1
          }
        }
      }
    },
    mainRivers: {
      default: {
        type: 'simple',
        symbol: {
          type: 'simple-line',
          width: '3px',
          color: colours.mainRivers[LIGHT_INDEX]
        }
      },
      dark: {
        type: 'simple',
        symbol: {
          type: 'simple-line',
          width: '3px',
          color: colours.mainRivers[DARK_INDEX]
        }
      }
    }
  }
  const getMapFeatureRenderer = (name) => {
    const mode = mapState.isDark ? 'dark' : 'default'
    return mapFeatureRenderers[name]?.[mode]
  }

  const fLayers = [
    {
      name: 'floodDefences',
      urlLayerName: 'nat_defences',
      q: 'fd'
    },
    {
      name: 'waterStorageAreas',
      urlLayerName: 'nat_fsa',
      q: 'fsa'
    },
    {
      name: 'mainRivers',
      urlLayerName: 'Statutory_Main_River_Map',
      q: 'mainr'
    }
  ]

  const setStylePaintProperties = (vtLayer, vectorTileLayer, isDark) => {
    vtLayer.styleLayers.forEach((styleLayerName) => {

      const layerPaintProperties = vectorTileLayer.getPaintProperties(styleLayerName)
      if (layerPaintProperties) {
        const fillColour = paintProperties[styleLayerName][isDark ? 1 : 0]
        layerPaintProperties['fill-color'] = fillColour
    // layerPaintProperties['fill-opacity'] = 0.75
        vectorTileLayer.setPaintProperties(styleLayerName, layerPaintProperties)
      }
    })
    // Un comment this section to infer the styleLayers for each vector layer
    // They don't seem to be defined anywhere server side, so Paul is anxious that
    // they may change when new layers are published.
    // const { styleRepository = {} } = vectorTileLayer
    // const { layers: styleLayers = [] } = styleRepository
    // styleLayers.forEach((styleLayer) => {
    //   console.log(styleLayer.id)
    // })
  }
  const addLayers = async () => {
    vtLayers.forEach((vtLayer) => {
      if (!vtLayer.q) {
        return
      }
      const vectorTileLayer = new VectorTileLayer({
        id: vtLayer.name,
        url: getVectorTileUrl(vtLayer.name),
        opacity: 0.75,
        visible: false
      })
      floodMap.map.add(vectorTileLayer)
    })
    fLayers.forEach(fLayer => {
      floodMap.map.add(new FeatureLayer({
        id: fLayer.name,
        url: getFeatureLayerUrl(fLayer.urlLayerName),
        renderer: getMapFeatureRenderer(fLayer.name),
        visible: false
      }))
    })
   }

  const toggleVisibility = (type, mode, segments, layers, map, isDark) => {
    const isDrawMode = ['frame', 'draw'].includes(mode)
    vtLayers.forEach((vtLayer, i) => {
      if (!vtLayer.q) {
        return
      }
      const id = vtLayer.name
      const layer = map.findLayerById(id)
      const isVisible = !isDrawMode && segments.join('') === vtLayer.q
      layer.visible = isVisible
      setStylePaintProperties(vtLayer, layer, isDark)
      visibleVtLayer = isVisible ? layer : visibleVtLayer
    })
    fLayers.forEach(fLayer => {
      const layer = map.findLayerById(fLayer.name)
      const isVisible = !isDrawMode && layers.includes(fLayer.q)
      layer.visible = isVisible
      if (isVisible) {
        layer.renderer = getMapFeatureRenderer(fLayer.name)
      }
    })
  }

  // const depthMap = ['over 2.3', '2.3', '1.2', '0.9', '0.6', '0.3', '0.15']
  const osAccountNumber = 'AC0000807064' // FCRM-5609 is raised to add this to a constants file
  const currentYear = new Date().getFullYear()
  const osAttribution = `Contains OS data © Crown copyright and database rights ${currentYear}`
  const osMasterMapAttribution = `© Crown copyright and database rights ${currentYear} OS ${osAccountNumber}`
  // FCRM-5599 Use these hyperlinks once the map component supports embedding them as markup (currently embeds as text)
  // const osAttributionHyperlink = `<a href="os-terms" class="os-credits__link"> Contains OS data &copy; Crown copyright and database rights >
  // const osMasterMapAttributionHyperlink = `<a href="os-terms" class="os-credits__link">&copy; Crown copyright and database rights ${current>


  const floodMap = new FloodMap('map', {
    behaviour: 'inline',
    place: 'England',
    zoom: 7.7,
    minZoom: 6,
    maxZoom: 20,
    center: [340367, 322766],
    maxExtent: [0, 0, 700000, 1300000],
    height: '100%',
    hasGeoLocation: false,
    framework: 'esri',
    symbols: [symbols.waterStorageAreas, symbols.floodDefences, symbols.mainRivers, symbols.noData],
    transformSearchRequest: getRequest,
    interceptorsCallback: getInterceptors,
    tokenCallback: getEsriToken,
    styles: [
      {
        name: 'default',
        url: defraMapConfig.mapStyleUrl,
        attribution: osAttribution,
      },
      {
        name: 'dark',
        url: defraMapConfig.darkMapStyleUrl,
        attribution: osAttribution,
      }
    ],
    search: {
      label: 'Search for a place',
      isAutocomplete: true,
      isExpanded: false,
      country: 'england'
    },
    legend: {
      width: '280px',
      isVisible: true,
  //    title: 'Menu',
      keyWidth: '360px',
      keyDisplay: 'min',
      segments: [{
        heading: 'Datasets',
  //      collapse: 'collapse',
        items: [
          {
            id: window.FMP_MAP_VERSION === 1 ? 'fz' : 'fzpd',
            label: window.FMP_MAP_VERSION === 1 ? 'Flood zones' : 'Flood zones 2 and 3'
          },
          {
            id: 'fzcl',
            label: 'Flood zones plus climate change'
          },
          // {
          //   id: 'rsd',
          //   label: 'River and sea with defences'
          // },
          // {
          //   id: 'rsu',
          //   label: 'River and sea without defences'
          // },
          {
            id: 'sw',
            label: 'Surface water'
          },
          {
            id: 'mo',
            label: 'None'
          }
        ].filter((item) => {
          if (window.FMP_MAP_VERSION === 1 && item.id === 'fzcl') {
            return false // remove 'fzcl' on version 1
          }
          return true
        })
      },
      {
        id: 'tf',
        heading: 'Climate change',
        parentIds: window.FMP_MAP_VERSION === 1 ? ['fz'] : ['DONT_SHOW'],
        items: [
          {
            id: 'fzpd',
            label: 'Present day'
          },
          {
            id: 'fzcl',
            label: 'Flood zones plus climate change'
          }
        ]
      },
      {
        id: 'tf',
        heading: 'Climate change',
        parentIds: ['rsd', 'rsu'],
        items: [
          {
            id: 'pd',
            label: 'Present day'
          },
          {
            id: 'cl',
            label: 'Years 2070 to 2125'
          }
        ]
      },
      {
        id: 'af1',
        heading: 'Annual likelihood of flooding',
  //      collapse: 'collapse',
        parentIds: ['rsd'],
        items: [
          {
            id: 'hr',
            label: terms.chance.rsHigh
          },
          {
            id: 'mr',
            label: terms.chance.rsMedium
          },
          {
            id: 'lr',
            label: terms.chance.rsLow
          }
        ]
      },
      {
        id: 'sw1',
        heading: 'Annual likelihood of flooding',
  //      collapse: 'collapse',
        parentIds: ['sw'],
        items: [
          {
            id: 'hr',
            label: terms.chance.swHigh
          },
          {
            id: 'mr',
            label: terms.chance.swMedium
          },
          {
            id: 'lr',
            label: terms.chance.swLow
          }
        ]
      },
      {
        id: 'af2',
        heading: 'Annual likelihood of flooding',
  //      collapse: 'collapse',
        parentIds: ['rsu'],
        items: [
          {
            id: 'mr',
            label: terms.chance.rsMedium
          },
          {
            id: 'lr',
            label: terms.chance.rsLow
          }
        ]
      }
      ],
      key: [
      //   {
      //     heading: 'Flood extent and depth',
      //     parentIds: ['pd', 'cl'],
      //     collapse: 'collapse',
      //     type: 'radio',
      //     items: [
      //       {
      //         id: 'na',
      //         label: 'Hidden'
      //       },
      //         {
      //             id: 'fe',
      //             label: 'Flood extent',
      //             fill: 'default: #2b8cbe, dark: #7fcdbb',
      //             isSelected: true
      //         },
      //       keyItemDefinitions.floodExtents,
      //       {
      //         id: 'md',
      //         label: 'Maximum depth in metres',
      //         display: 'ramp',
      //         numLabels: 3,
      //             items: [
      //                 {
      //                     label: 'above 2.3',
      //                     fill: 'default: #7f2704, dark: #f7fcf5'
      //                 },
      //                 {
      //                     label: '2.3',
      //                     fill: '#a63603, dark: #e5f5e0'
      //                 },
      //                 {
      //                     label: '1.2',
      //                     fill: '#d94801, dark: #c7e9c0'
      //                 },
      //                 {
      //                     label: '0.9',
      //                     fill: '#f16913, dark: #a1d99b'
      //                 },
      //                 {
      //                     label: '0.6',
      //                     fill: '#fd8d3c, dark: #74c476'
      //                 },
      //                 {
      //                     label: '0.3',
      //                     fill: '#fdae6b, dark: #41ab5d'
      //                 },
      //                 {
      //                     label: '0.15',
      //                     fill: '#fdd0a2, dark: #238b45'
      //                 }
      //             ]
      //       }
      //     ]
      //   },
      //   {
      //     heading: 'Map features',
      //     parentIds: ['fz'],
      //     collapse: 'collapse',
      //     items: [
      //       {
      //         id: 'fz23',
      //         label: 'Flood zones',
      //         isSelected: true,
      //         items: [
      //           keyItemDefinitions.floodZone2,
      //           keyItemDefinitions.floodZone3
      //         ]
      //       },
      //       keyItemDefinitions.waterStorageAreas,
      //       keyItemDefinitions.floodDefences
      //     ]
      //   },
      //   {
      //     heading: 'Map features',
      //     parentIds: ['pd', 'cl'],
      //     collapse: 'collapse',
      //     items: [
      //       keyItemDefinitions.waterStorageAreas,
      //       keyItemDefinitions.floodDefences
      //     ]
      //   },
      {
        heading: 'Map features',
        parentIds: ['fzpd'],
        items: [
          keyItemDefinitions.floodZone2,
          keyItemDefinitions.floodZone3,
          keyItemDefinitions.waterStorageAreas,
          keyItemDefinitions.floodDefences,
          keyItemDefinitions.mainRivers
        ]
      },
      {
        heading: 'Map features',
        parentIds: ['fzcl'],
        items: [
          keyItemDefinitions.floodZone3CC,
          keyItemDefinitions.floodZoneNoData,
          keyItemDefinitions.waterStorageAreas,
          keyItemDefinitions.floodDefences,
          keyItemDefinitions.mainRivers
        ]
      },
    {
          heading: 'Map features',
          parentIds: ['rsd', 'rsu', 'sw'],
  //        collapse: 'collapse',
          items: [
            keyItemDefinitions.floodExtents,
            keyItemDefinitions.waterStorageAreas,
            keyItemDefinitions.floodDefences,
            keyItemDefinitions.mainRivers
          ]
        },
        {
          heading: 'Map features',
          parentIds: ['mo'],
    //      collapse: 'collapse',
          items: [
            keyItemDefinitions.waterStorageAreas,
            keyItemDefinitions.floodDefences,
            keyItemDefinitions.mainRivers
          ]
        }
      ]
    },
    queryArea: {
      heading: 'Get a boundary report',
      startLabel: 'Add site boundary',
      editLabel: 'Edit site boundary',
      addLabel: 'Add boundary',
      updateLabel: 'Update boundary',
      submitLabel: 'Get summary report',
      helpLabel: 'How to draw a shape',
      keyLabel: 'Report area',
      html: '<h3 class="govuk-heading-m govuk-!-font-size-16">For an approximate site boundary</h3> <ul class="govuk-list govuk-list--bullet govuk-!-font-size-16"><li>use the red square to define the boundary of your site</li><li>zoom and move the map to position the square</li><li>click the ‘add boundary’ button to finish</li></ul></p></br><h3 class="govuk-heading-m govuk-!-font-size-16">For a more detailed site boundary:</h3><ul class="govuk-list govuk-list--bullet govuk-!-font-size-16"><li>click ‘edit shape’ and dots will appear on the square</li><li>move the dots to change the shape of the square until it matches your boundary</li><li>click the ‘add boundary’ button to finish</li></ul>',
      minZoom: 21,
      //min zoom update to edit boundary zoom restriction
      maxZoom: 17,
      styles: [
        {
          name: 'default',
          url: defraMapConfig.masterMapUrl,
          attribution: osMasterMapAttribution
        },
        {
          name: 'dark',
          url: defraMapConfig.masterMapDarkUrl,
          attribution: osMasterMapAttribution
        }
      ]
    },
    queryLocation: {
      layers: vtLayers.map(vtLayer => vtLayer.name)
    }
  })

  const mapState = {
    isDark: false,
    isRamp: false,
    layers: [],
    segments: [],
    isClimateChange: false,
    isFloodZone: false
  }

  const updateMapState = (segments, layers, style) => {
    mapState.segments = segments
    mapState.layers = layers
    mapState.isDark = style ? style === 'dark' || style?.name === 'dark' : mapState.isDark
    mapState.isRamp = layers.includes('md')
    mapState.isClimateChange = segments.includes('cl') || segments.includes('fzcl')
    mapState.isFloodZone = segments.includes('fz') || segments.includes('fzcl') || segments.includes('fzpd')
    console.log('mapState: ', mapState)
  }

  // Component is ready and we have access to map
  // We can listen for map events now, such as 'loaded'
  floodMap.addEventListener('ready', async e => {
    VectorTileLayer = floodMap.modules.VectorTileLayer
    FeatureLayer = floodMap.modules.FeatureLayer
    Point = floodMap.modules.Point
    const { mode, segments, layers, style } = e.detail
    updateMapState(segments, layers, style)
    await addLayers()
    setTimeout(() => toggleVisibility(null, mode, segments, layers, floodMap.map, mapState.isDark), 1000)
    initPointerMove()
  })

  //event to fire for 'Get site report' button to non dynamic results page
  document.addEventListener('click', e => {
    if (e.target.innerText === 'Get summary report') {
      window.location = '/v1/results'
    }
  })

  // Listen for mode, segments, layers or style changes
  floodMap.addEventListener('change', e => {
    const { type, mode, segments, layers, style } = e.detail
    updateMapState(segments, layers, style)
    if (['layer', 'segment'].includes(type)) {
      floodMap.setInfo(null)
    }
    const map = floodMap.map
    toggleVisibility(type, mode, segments, layers, map, mapState.isDark)
  })

  const initPointerMove = () => {
    let lastHit = 0
    const throttleMs = 20 // Throttle to reduce hitTest usage
    const minScale = 250000 // vector tile layers use minScale value from arcgis online config for visibility
    floodMap.view.on('pointer-move', e => {
      const now = Date.now()
      if (now - lastHit < throttleMs || floodMap.view.scale > minScale) {
        return
      }
      lastHit = now
      floodMap.view.hitTest(e, { include: [visibleVtLayer] }).then((response) => {
        document.body.style.cursor = response?.results?.length > 0 ? 'pointer' : 'default'
      })
    })

    floodMap.view.on('pointer-leave', _e => {
      document.body.style.cursor = 'default'
    })
  }
  

  const getDataset = () => {
    if (mapState.segments.includes('sw')) {
      return 'Surface water'
    }
    if (mapState.segments.includes('rsd')) {
      return 'River and sea with defences'
    }
    if (mapState.segments.includes('rsu')) {
      return 'River and sea without defences'
    }
    return undefined
  }

  const getModelFeatureLayer = async (coords, layerName) => {
    const model = new FeatureLayer({ url: getModelFeatureLayerUrl(layerName) })
    const results = await model.queryFeatures({
      geometry: new Point({ x: coords[0], y: coords[1], spatialReference: 27700 }),
      outFields: ['*'],
      spatialRelationship: 'intersects',
      distance: 1,
      units: 'meters',
      returnGeometry: false
    })
    const attributes = results.features.length ? results.features[0].attributes : undefined
    return attributes
  }

  const formatFloodSource = (floodSource = '') => {
    if (floodSource === 'Coastal') {
      return 'Sea'
    } else if (floodSource === 'Fluvial') {
      return 'River'
    }
    return floodSource[0].toUpperCase() + floodSource.slice(1)
  }

  // Listen to map queries
  floodMap.addEventListener('query', async e => {
    const { coord, features } = e.detail
    const feature = features.isPixelFeaturesAtPixel ? features.items[0] : null
    if (!feature) {
      floodMap.setInfo(null)
      return
    }

    // This part builds the info container as an array [] of entries named listContents.
    // To add a line to the info, you should push a pair of values, ['Title', 'Value']
    // eg: listContents.push(['Flood zone', 2])

    const listContents = [
      ['Easting and northing', `${Math.round(coord[0])},${Math.round(coord[1])}`],
      ['Timeframe', mapState.isClimateChange ? 'Climate change' : 'Present day']
    ]

    const vtLayer = feature && vtLayers.find(vtLayer => vtLayer.name === feature.layer)
    let floodZone

    if (feature && feature._symbol !== undefined) {
      // This part is currently only applicable to Flood_Zones
      //const floodZone = floodZoneSymbolIndex[feature._symbol]
      floodZone = getFloodZoneFromFeature(feature, mapState)
      if (floodZone) {
        if(!mapState.isClimateChange || floodZone === 'No data available') {
          listContents.push(['Flood zone', floodZone])
        }
        // call getModelFeatureLayer to get the flood source
        // (was previously using ModelOriginLayer but Lloyd said Feature Layer is better.)
        if (floodZone !== 'No data available') {
          const attributes = await getModelFeatureLayer(coord, feature.layer)
          if (attributes && attributes.flood_source) {
            listContents.push(['Flood source', formatFloodSource(attributes.flood_source)])
          }
        }
      }
    } else {
      if (mapState.isFloodZone) {
        // This part is applicable for Flood_Zones, when an area outside 
        // of a zone has been clicked
        listContents.push(['Flood zone', '1'])
      } else {
        // This part is applicable for non Flood_Zones layers, when an area outside 
        // of a zone has been clicked
        const dataset = getDataset()
        if (dataset) {
          listContents.push(['Dataset', dataset])
        }
        if (vtLayer && vtLayer.likelihoodLabel) {
          listContents.push(['Annual exceedance probability (AEP)', vtLayer.likelihoodLabel])
        }
        if (vtLayer && vtLayer.chanceLabel) {
          listContents.push(['Annual likelihood of flooding', vtLayer.chanceLabel])
        }
        if (vtLayer && vtLayer.likelihoodchanceLabel) {
          listContents.push(['Annual exceedance probability (AEP)', vtLayer.likelihoodchanceLabel])
        }
      }
    }

    // Add any markup that you want at the end of the info panel to extraContent

    let extraContent = ''

    if (mapState.isClimateChange && floodZone !== 'No data available') {
      // if you want more than one bit of extraContent, then keep appending it like this
      // extraContent += 'Whatever else you want to be added' 
      extraContent += `<p class="govuk-body-s"><strong>Climate change allowances<strong></p>
          <ul class="govuk-list govuk-list--bullet">
            <li class='govuk-body-s'>
              these have been taken from the Environment Agency’s <a href="https://www.gov.uk/guidance/flood-risk-assessments-climate-change-allowances" contenteditable="false" style="cursor: pointer;">Flood risk assessment: climate change allowances</a>
            </li>
            <li class='govuk-body-s'>
              river flooding uses the 'central' allowance, based on the 50th percentile for the 2080s epoch
            </li>
            <li class='govuk-body-s'>
              sea and tidal flooding uses the 'upper end' allowance, based on the 95th percentile for 2125
            </li>
          </ul>`
        } 

    let contentFloodZones = ''

    if (mapState.isFloodZone) {
      // if you want more than one bit of extraContent, then keep appending it like this
      // extraContent += 'Whatever else you want to be added' 
      if (floodZone === 'No data available') {
        contentFloodZones += '<p class="govuk-body-s"><strong>No data available</strong></p><p class="govuk-body-s">This data is currently unavailable. In some locations we are working on important improvements to supporting layers. In those locations we have kept our previous flood zones while these improvements are made. We will publish the data when it becomes available.</p>'
      } else if (mapState.isClimateChange) {
        contentFloodZones += '<p class="govuk-body-s"><strong>How to use flood zones plus climate change</strong></p> <p class="govuk-body-s">Flood zones plus climate change are given to help you further investigate flood risk. </br> <a href="#">Find out more about this data and how it should be used</a></p>'
      } else {
        contentFloodZones += '<p class="govuk-body-s"><strong>Updates to flood zones 2 and 3</strong></p> <p class="govuk-body-s">Flood zones 2 and 3 have been updated to include local detailed models, and a new improved national model.</p> '
       }
      
    }

    // finally tell the map-component to redraw the info 
    // using the listContents that have been built.
    // The HTML markup that wraps the info is defined in the file infoRenderer
    floodMap.setInfo(renderInfo(renderList(listContents), contentFloodZones, extraContent, 'Information'))
  })
})
