// /flood-map Path defined as an alias to npm or submodule version in webpack alias
// import { FloodMap } from '/flood-map' // eslint-disable-line import/no-absolute-path
const FloodMap = defra.FloodMap
let VectorTileLayer, FeatureLayer, Point
import { getEsriToken, getRequest, getInterceptors, getDefraMapConfig } from './tokens.js'
import { renderInfo, renderList } from './infoRenderer.js'
import { terms } from './terms.js'

const symbols = {
  waterStorageAreas: '/public/images/water-storage.svg',
  floodDefences: '/public/images/flood-defence.svg',
  mainRivers: '/public/images/main-rivers.svg'
}

const keyItemDefinitions = {
  floodZone1: {
    // id: 'fz2',
    label: 'Flood zone 2',
    fill: 'default: #1d70b8, dark: #41ab5d'
  },
  floodZone2: {
    // id: 'fz2',
    label: 'Flood zone 3',
    fill: 'default: #003078, dark: #e5f5e0'
  },
  waterStorageAreas: {
    id: 'fsa',
    label: 'Water storage',
    icon: symbols.waterStorageAreas,
    fill: 'default: #12393d, dark: #12393d'
  },
  floodDefences: {
    id: 'fd',
    label: 'Flood defence',
    icon: symbols.floodDefences,
    fill: '#12393d'
  },
  mainRivers: {
    id: 'mainr',
    label: 'Main Rivers',
    icon: symbols.mainRivers,
    fill: '#f47738'
  },
  floodExtents: {
    // id: 'fz2',
    label: 'Flood extent',
    fill: 'default: #2b8cbe, dark: #7fcdbb'
  }
}

// floodZoneSymbolIndex is used to infer the _symbol value sent to the query feature when a layer is clicked
// we believe it depends on the order of the styles that are set on the flood zones vector tile layer
// and it is used to infer the flood zone that has been clicked on by a user.
// On a previous data set, these values were in the reverse order so we need to verify that they remain correct
// after a data upload to arcGis
const floodZoneSymbolIndex = ['3', '2']

const surfaceWaterStyleLayers = [
  'Risk of Flooding from Surface Water Depth > 0mm/1',
  'Risk of Flooding from Surface Water Depth > 200mm/1',
  'Risk of Flooding from Surface Water Depth > 300mm/1',
  'Risk of Flooding from Surface Water Depth > 600mm/1',
  'Risk of Flooding from Surface Water Depth > 900mm/1',
  'Risk of Flooding from Surface Water Depth > 1200mm/1'
]

getDefraMapConfig().then((defraMapConfig) => {
  const getVectorTileUrl = (layerName) => `${defraMapConfig.agolVectorTileUrl}/${layerName + defraMapConfig.layerNameSuffix}/VectorTileServer`
  const getFeatureLayerUrl = (layerName) => `${defraMapConfig.agolServiceUrl}/${layerName}/FeatureServer`
  const getModelFeatureLayerUrl = (layerName) => `${defraMapConfig.agolServiceUrl}/${layerName + defraMapConfig.layerNameSuffix}/FeatureServer`
  const vtLayers = [
    {
      name: 'Flood_Zones_2_and_3_Rivers_and_Sea',
      q: 'fz',
      styleLayers: [
        'Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1',
        'Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1'
      ]
    },
    {
      name: 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1',
      q: '',
      styleLayers: [
        'Flood Zones 2 and 3 Rivers and Sea CCP1/Flood Zone 3/1',
        'Flood Zones 2 and 3 Rivers and Sea CCP1/Flood Zone 2/1'
      ]
    },
    {
      name: 'Rivers_1_in_30_Sea_1_in_30_Defended',
      q: '',
      styleLayers: ['Rivers 1 in 30 Sea 1 in 30 Defended/1'],
      likelihoodLabel: terms.likelihood.rsHigh
    },
    {
      name: 'Rivers_1_in_30_Sea_1_in_30_Defended_Depth',
      q: 'rsdpdhr',
      styleLayers: ['Rivers 1 in 30 Sea 1 in 30 Defended Depth/1'],
      likelihoodLabel: terms.likelihood.rsHigh
    },
    {
      name: 'Rivers_1_in_100_Sea_1_in_200_Defended_Depth',
      q: 'rsdpdmr',
      styleLayers: ['Rivers 1 in 100 Sea 1 in 200 Defended Depth/1'],
      likelihoodLabel: terms.likelihood.rsMedium
    },
    {
      name: 'Rivers_1_in_100_Sea_1_in_200_Undefended_Depth',
      q: 'rsupdmr',
      styleLayers: ['Rivers 1 in 100 Sea 1 in 200 Undefended Depth/1'],
      likelihoodLabel: terms.likelihood.rsMedium
    },
    {
      name: 'Rivers_1_in_1000_Sea_1_in_1000_Defended_Depth',
      q: 'rsdpdlr',
      styleLayers: ['Rivers 1 in 1000 Sea 1 in 1000 Defended Depth/1'],
      likelihoodLabel: terms.likelihood.rsLow
    },
    {
      name: 'Rivers_1_in_1000_Sea_1_in_1000_Undefended_Depth',
      q: 'rsupdlr',
      styleLayers: ['Rivers 1 in 1000 Sea 1 in 1000 Undefended Depth/1'],
      likelihoodLabel: terms.likelihood.rsLow
    },
    {
      name: 'Rivers_1_in_30_Sea_1_in_30_Defended_CCP1',
      q: '',
      styleLayers: ['Rivers 1 in 30 Sea 1 in 30 Defended CCP1/1'],
      likelihoodLabel: terms.likelihood.rsHigh
    },
    {
      name: 'Rivers_1_in_30_Sea_1_in_30_Defended_Depth_CCP1',
      q: 'rsdclhr',
      styleLayers: ['Rivers 1 in 30 Sea 1 in 30 Defended Depth CCP1/1'],
      likelihoodLabel: terms.likelihood.rsHigh
    },
    {
      name: 'Rivers_1_in_100_Sea_1_in_200_Defended_Depth_CCP1',
      q: 'rsdclmr',
      styleLayers: ['Rivers 1 in 100 Sea 1 in 200 Defended Depth CCP1/1'],
      likelihoodLabel: terms.likelihood.rsMedium
    },
    {
      name: 'Rivers_1_in_100_Sea_1_in_200_Undefended_Depth_CCP1',
      q: 'rsuclmr',
      styleLayers: ['Rivers 1 in 100 Sea 1 in 200 Undefended Depth CCP1/1'],
      likelihoodLabel: terms.likelihood.rsMedium
    },
    {
      name: 'Rivers_1_in_1000_Sea_1_in_1000_Defended_Depth_CCP1',
      q: 'rsdcllr',
      styleLayers: ['Rivers 1 in 1000 Sea 1 in 1000 Defended Depth CCP1/1'],
      likelihoodLabel: terms.likelihood.rsLow
    },
    {
      name: 'Rivers_1_in_1000_Sea_1_in_1000_Undefended_Depth_CCP1',
      q: 'rsucllr',
      styleLayers: ['Rivers 1 in 1000 Sea 1 in 1000 Undefended Depth CCP1/1'],
      likelihoodLabel: terms.likelihood.rsLow
    },
    {
      name: 'Risk_of_Flooding_from_Surface_Water_Low',
      q: 'swpdlr',
      styleLayers: surfaceWaterStyleLayers,
      likelihoodLabel: terms.likelihood.swLow
    },
    {
      name: 'Risk_of_Flooding_from_Surface_Water_Medium',
      q: 'swpdmr',
      styleLayers: surfaceWaterStyleLayers,
      likelihoodLabel: terms.likelihood.swMedium
    },
    {
      name: 'Risk_of_Flooding_from_Surface_Water_High',
      q: 'swpdhr',
      styleLayers: surfaceWaterStyleLayers,
      likelihoodLabel: terms.likelihood.swHigh
    }
  ]

  const nonFloodZoneLight = '#2b8cbe'
  const nonFloodZoneDark = '#7fcdbb'
  const floodZone2Light = '#1d70b8'
  const floodZone2Dark = '#41ab5d'
  const floodZone3Light = '#003078'
  const floodZone3Dark = '#e5f5e0'

  // These will require reinstating when depth band data is available
  // // light tones > 2300 to < 150
  const nonFloodZoneDepthBandsLight = ['#7f2704', '#a63603', '#d94801', '#f16913', '#fd8d3c', '#fdae6b', '#fdd0a2']
  // // GREENS dark tones > 2300 to < 150
  const nonFloodZoneDepthBandsDark = ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45']
  // // BLUES dark tones > 2300 to < 150
  // // const nonFloodZoneDepthBandsDark = ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5']

  const paintProperties = {
    'Flood Zones 2 and 3 Rivers and Sea/Flood Zone 2/1': [floodZone2Light, floodZone2Dark],
    'Flood Zones 2 and 3 Rivers and Sea/Flood Zone 3/1': [floodZone3Light, floodZone3Dark],
    'Flood Zones 2 and 3 Rivers and Sea CCP1/Flood Zone 3/1': [floodZone3Light, floodZone3Dark],
    'Flood Zones 2 and 3 Rivers and Sea CCP1/Flood Zone 2/1': [floodZone2Light, floodZone2Dark],
    'Rivers 1 in 30 Sea 1 in 30 Defended/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 30 Sea 1 in 30 Defended Depth/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 100 Sea 1 in 200 Defended Depth/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 100 Sea 1 in 200 Undefended Depth/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 1000 Sea 1 in 1000 Defended Depth/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 1000 Sea 1 in 1000 Undefended Depth/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 30 Sea 1 in 30 Defended CCP1/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 30 Sea 1 in 30 Defended Depth CCP1/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 100 Sea 1 in 200 Defended Depth CCP1/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 100 Sea 1 in 200 Undefended Depth CCP1/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 1000 Sea 1 in 1000 Defended Depth CCP1/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Rivers 1 in 1000 Sea 1 in 1000 Undefended Depth CCP1/1': [nonFloodZoneLight, nonFloodZoneDark],
    'Risk of Flooding from Surface Water Depth > 0mm/1': [nonFloodZoneDepthBandsLight[6], nonFloodZoneDepthBandsDark[6]],
    'Risk of Flooding from Surface Water Depth > 200mm/1': [nonFloodZoneDepthBandsLight[5], nonFloodZoneDepthBandsDark[5]],
    'Risk of Flooding from Surface Water Depth > 300mm/1': [nonFloodZoneDepthBandsLight[4], nonFloodZoneDepthBandsDark[4]],
    'Risk of Flooding from Surface Water Depth > 600mm/1': [nonFloodZoneDepthBandsLight[3], nonFloodZoneDepthBandsDark[3]],
    'Risk of Flooding from Surface Water Depth > 900mm/1': [nonFloodZoneDepthBandsLight[2], nonFloodZoneDepthBandsDark[2]],
    'Risk of Flooding from Surface Water Depth > 1200mm/1': [nonFloodZoneDepthBandsLight[1], nonFloodZoneDepthBandsDark[1]]
  }

  const fLayers = [
    {
      name: 'nat_defences',
      q: 'fd',
      renderer: {
        type: 'simple',
        symbol: {
          type: 'simple-line',
          width: '3px',
          color: '#12393d'
        }
      }
    },
    {
      name: 'nat_fsa',
      q: 'fsa',
      renderer: {
        type: 'simple',
        symbol: {
          type: 'simple-fill',
          style: 'diagonal-cross',
          color: '#12393d',
          outline: {
            color: '#12393d',
            width: 1
          }
        }
      }
    },
    {
      name: 'Statutory_Main_River_Map',
      q: 'mainr',
      renderer: {
        type: 'simple',
        symbol: {
          type: 'simple-line',
          width: '3px',
          color: '#f47738'
        }
      }
    }
  ]

  const setStylePaintProperties = (vtLayer, vectorTileLayer, isDark) => {
    vtLayer.styleLayers.forEach((styleLayerName) => {
      const layerPaintProperties = vectorTileLayer.getPaintProperties(styleLayerName)
      if (layerPaintProperties) {
        const fillColour = paintProperties[styleLayerName][isDark ? 1 : 0]
        layerPaintProperties['fill-color'] = fillColour
        layerPaintProperties['fill-opacity'] = 0.75
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
      const vectorTileLayer = new VectorTileLayer({
        id: vtLayer.name,
        url: getVectorTileUrl(vtLayer.name),
        visible: false
      })
      floodMap.map.add(vectorTileLayer)
    })
    fLayers.forEach(fLayer => {
      floodMap.map.add(new FeatureLayer({
        id: fLayer.name,
        url: getFeatureLayerUrl(fLayer.name),
        renderer: fLayer.renderer,
        visible: false
      }))
    })
   }

  const toggleVisibility = (type, mode, segments, layers, map, isDark) => {
    const isDrawMode = ['frame', 'draw'].includes(mode)
    vtLayers.forEach((vtLayer, i) => {
      const id = vtLayer.name
      const layer = map.findLayerById(id)
      const isVisible = !isDrawMode && segments.join('') === vtLayer.q
      layer.visible = isVisible
      setStylePaintProperties(vtLayer, layer, isDark)
    })
    fLayers.forEach(fLayer => {
      const layer = map.findLayerById(fLayer.name)
      const isVisible = !isDrawMode && layers.includes(fLayer.q)
      layer.visible = isVisible
    // Re-colour feature layers
    })
  }

  // const depthMap = ['over 2.3', '2.3', '1.2', '0.9', '0.6', '0.3', '0.15']

  const floodMap = new FloodMap('map', {
    type: 'hybrid',
    place: 'England',
    zoom: 7.7,
    minZoom: 6,
    maxZoom: 20,
    centre: [340367, 322766],
    height: '100%',
    hasGeoLocation: true,
    framework: 'esri',
    symbols: [symbols.waterStorageAreas, symbols.floodDefences, symbols.mainRivers],
    requestCallback: getRequest,
    styles: {
      tokenCallback: getEsriToken,
      interceptorsCallback: getInterceptors,
      defaultUrl: defraMapConfig.mapStyleUrl,
      darkUrl: defraMapConfig.darkMapStyleUrl
    },
    search: {
      label: 'Search for a place',
      isAutocomplete: true,
      isExpanded: false
    },
    legend: {
      width: '280px',
      isVisible: true,
      title: 'Menu',
      keyWidth: '360px',
      keyDisplay: 'min',
      segments: [{
        heading: 'Datasets',
        collapse: 'collapse',
        items: [
          {
            id: 'fz',
            label: 'Flood zones 2 and 3'
          },
          {
            id: 'rsd',
            label: 'River and sea with defences'
          },
          {
            id: 'rsu',
            label: 'River and sea without defences'
          },
          {
            id: 'sw',
            label: 'Surface water'
          },
          {
            id: 'mo',
            label: 'None'
          }
        ]
      },
      {
        id: 'tf',
        heading: 'Time frame',
        collapse: 'collapse',
        parentIds: ['rsd', 'rsu', 'sw'],
        items: [
          {
            id: 'pd',
            label: 'Present day'
          },
          {
            id: 'cl',
            label: 'Climate change'
          }
        ]
      },
      {
        id: 'af1',
        heading: 'Annual likelihood of flooding',
        collapse: 'collapse',
        parentIds: ['rsd'],
        items: [
          {
            id: 'hr',
            label: terms.likelihood.rsHigh
          },
          {
            id: 'mr',
            label: terms.likelihood.rsMedium
          },
          {
            id: 'lr',
            label: terms.likelihood.rsLow
          }
        ]
      },
      {
        id: 'sw1',
        heading: 'Annual likelihood of flooding',
        collapse: 'collapse',
        parentIds: ['sw'],
        items: [
          {
            id: 'hr',
            label: terms.likelihood.swHigh
          },
          {
            id: 'mr',
            label: terms.likelihood.swMedium
          },
          {
            id: 'lr',
            label: terms.likelihood.swLow
          }
        ]
      },
      {
        id: 'af2',
        heading: 'Annual likelihood of flooding',
        collapse: 'collapse',
        parentIds: ['rsu'],
        items: [
          {
            id: 'mr',
            label: terms.likelihood.rsMedium
          },
          {
            id: 'lr',
            label: terms.likelihood.rsLow
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
      //           keyItemDefinitions.floodZone1,
      //           keyItemDefinitions.floodZone2
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
          parentIds: ['fz'],
          collapse: 'collapse',
          items: [
            keyItemDefinitions.floodZone1,
            keyItemDefinitions.floodZone2,
            keyItemDefinitions.waterStorageAreas,
            keyItemDefinitions.floodDefences,
            keyItemDefinitions.mainRivers
          ]
        },
        {
          heading: 'Map features',
          parentIds: ['rsd', 'rsu', 'sw'],
          collapse: 'collapse',
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
          collapse: 'collapse',
          items: [
            keyItemDefinitions.waterStorageAreas,
            keyItemDefinitions.floodDefences,
            keyItemDefinitions.mainRivers
          ]
        }
      ]
    },
    queryPolygon: {
      heading: 'Get a boundary report',
      startLabel: 'Add site boundary',
      editLabel: 'Edit site boundary',
      addLabel: 'Add boundary',
      updateLabel: 'Update boundary',
      submitLabel: 'Get summary report',
      helpLabel: 'How to draw a shape',
      keyLabel: 'Report area',
      html: '<p><strong>For an approximate site boundary</strong>: <ul class="govuk-list govuk-list--bullet"><li>use the red square to define the boundary of your site</li><li>zoom and move the map to position the square</li><li>click the ‘add boundary’ button to finish</li></ul></p></br><p><strong>For a more detailed site boundary:</strong></p><ul class="govuk-list govuk-list--bullet"><li>click ‘edit shape’ and dots will appear on the square</li><li>move the dots to change the shape of the square until it matches your boundary</li><li>click the ‘add boundary’ button to finish</li></ul>',
      defaultUrl: '/map/styles/polygon-default',
      darkUrl: '/map/styles/polygon-dark',
      minZoom: 19,
      maxZoom: 21
    },
    queryPixel: vtLayers.map(vtLayer => vtLayer.name)
  })

  const mapState = {
    isDark: false,
    isRamp: false,
    layers: [],
    segments: []
  }

  // Component is ready and we have access to map
  // We can listen for map events now, such as 'loaded'
  floodMap.addEventListener('ready', async e => {
    VectorTileLayer = floodMap.modules.VectorTileLayer
    FeatureLayer = floodMap.modules.FeatureLayer
    Point = floodMap.modules.Point
    const { mode, segments, layers, basemap } = e.detail
    mapState.segments = segments
    mapState.layers = layers
    mapState.isDark = basemap === 'dark'
    mapState.isRamp = layers.includes('md')
    console.log('ready mapState', mapState)
    await addLayers()
    setTimeout(() => toggleVisibility(null, mode, segments, layers, floodMap.map, mapState.isDark), 1000)
  })

  //event to fire for 'Get site report' button to non dynamic results page
  document.addEventListener('click', e => {
    if (e.target.innerText === 'Get summary report') {
      window.location = '/v1/results'
    }
  })

  // Listen for mode, segments, layers or style changes
  floodMap.addEventListener('change', e => {
    const { type, mode, segments, layers, basemap } = e.detail
    mapState.segments = segments
    mapState.layers = layers
    mapState.isDark = basemap === 'dark'
    mapState.isRamp = layers.includes('md')
    console.log('onChange mapState', mapState)
    if (['layer', 'segment'].includes(type)) {
      floodMap.info = null
    }
    const map = floodMap.map
    toggleVisibility(type, mode, segments, layers, map, mapState.isDark)
  })

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
    console.log('results', results)
    const attributes = results.features.length ? results.features[0].attributes : undefined
    console.log('attributes', attributes)
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

    // This part builds the info container as an array [] of entries named listContents.
    // To add a line to the info, you should push a pair of values, ['Title', 'Value']
    // eg: listContents.push(['Flood zone', 2])

    const listContents = [
      ['Easting and northing', `${Math.round(coord[0])},${Math.round(coord[1])}`],
      ['Timeframe', mapState.segments.includes('cl') ? 'Climate change' : 'Present day']
    ]

    const vtLayer = feature && vtLayers.find(vtLayer => vtLayer.name === feature.layer)

    if (feature && feature._symbol !== undefined) {
      // This part is currently only applicable to Flood_Zones
      const floodZone = floodZoneSymbolIndex[feature._symbol]
      if (floodZone) {
        listContents.push(['Flood zone', floodZone])
        // call getModelFeatureLayer to get the flood source
        // (was previously using ModelOriginLayer but Lloyd said Feature Layer is better.)
        const attributes = await getModelFeatureLayer(coord, feature.layer)
        if (attributes && attributes.flood_source) {
          listContents.push(['Flood source', formatFloodSource(attributes.flood_source)])
        }
      }
    } else {
      if (mapState.segments.includes('fz')) {
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
          listContents.push(['Annual likelihood of flooding', vtLayer.likelihoodLabel])
        }
      }
    }
    // finally tell the map-component to redraw the info 
    // using the listContents that have been built.
    // The HTML markup that wraps the info is defined in the file infoRenderer
    floodMap.info = renderInfo(renderList(listContents))
  })
})
