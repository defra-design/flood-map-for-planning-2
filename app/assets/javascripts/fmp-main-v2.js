// /flood-map Path defined as an alias to npm or submodule version in webpack alias
// import { FloodMap } from '/flood-map' // eslint-disable-line import/no-absolute-path
import { getEsriToken, getRequest, getInterceptors, getDefraMapConfig } from './tokens.js'
import { renderInfo, renderList } from './infoRenderer.js'
import { terms } from './terms.js'
import { colours, getKeyItemFill, LIGHT_INDEX, DARK_INDEX } from './colours.js'
import { setUpBaseMaps } from './baseMaps.js'
import { vtLayers } from './vtLayers.js'
const FloodMap = window.defra.FloodMap
let VectorTileLayer, FeatureLayer
// const GroupLayer = await $arcgis.import("@arcgis/core/layers/GroupLayer.js")
const GroupLayer = undefined // Add in when we can work out how to import it

let visibleVtLayer
const symbols = {
  waterStorageAreas: '/public/images/water-storage.svg',
  floodDefences: '/public/images/flood-defence.svg',
  mainRivers: '/public/images/main-rivers.svg',
  noData: '/public/images/no-data.svg'
}

const keyItemDefinitions = {
  floodZone2: {
    label: 'Flood zone 2',
    fill: getKeyItemFill(colours.floodZone2)
  },
  floodZone3: {
    label: 'Flood zone 3',
    fill: getKeyItemFill(colours.floodZone3)
  },
  floodZone2PresentDay: {
    label: 'Flood zone 2 (present day)',
    fill: getKeyItemFill(colours.floodZone2)
  },
  floodZone3PresentDay: {
    label: 'Flood zone 3 (present day)',
    fill: getKeyItemFill(colours.floodZone3)
  },
  floodZone3CC: {
    label: window.FMP_MAP_VERSION === 1 ? 'Climate change (2070 to 2125)' : 'Flood zones 2 and 3 (2070 to 2125)',
    fill: getKeyItemFill(colours.floodZoneCC)
  },
  floodZoneNoData: {
    label: terms.labels.noData,
    icon: symbols.noData,
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
// So this is the best attempt at inferring the flood zone correctly
const floodZoneSymbolIndex = ['3', '2']
const floodZoneCCSymbolIndex = ['2', '3', terms.labels.noData]

const getFloodZoneFromFeature = (feature, mapState) => {
  if (feature.flood_zone === terms.keys.fz2) { return '2' }
  if (feature.flood_zone === terms.keys.fz3) { return '3' }
  if (feature.flood_zone === terms.keys.fzCC) { return terms.keys.fzCC }
  if (feature.flood_zone === terms.keys.fzNoData) { return terms.keys.fzNoData }
  const symbolIndex = mapState?.isClimateChange ? floodZoneCCSymbolIndex : floodZoneSymbolIndex
  return symbolIndex[feature._symbol]
}

getDefraMapConfig().then((defraMapConfig) => {
  const getVectorTileUrl = (layerName) => `${defraMapConfig.agolVectorTileUrl}/${layerName + defraMapConfig.layerNameSuffix}/VectorTileServer`
  const getFeatureLayerUrl = (urlLayerName) => `${defraMapConfig.agolServiceUrl}/${urlLayerName}/FeatureServer`

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
    vtLayer.styleLayers.forEach(([styleLayerName, paintProperties]) => {
      const layerPaintProperties = vectorTileLayer.getPaintProperties(styleLayerName)
      if (layerPaintProperties) {
        const fillColour = paintProperties[isDark ? 1 : 0]
        layerPaintProperties['fill-color'] = fillColour
        // layerPaintProperties['fill-opacity'] = 0.75
        vectorTileLayer.setPaintProperties(styleLayerName, layerPaintProperties)
      }
    })
    if (vtLayer.setStyleProperties) {
      vtLayer.setStyleProperties(vectorTileLayer, isDark)
    }

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
      if (vtLayer.getVtLayer) {
        vtLayer.getVtLayer(getVectorTileUrl, VectorTileLayer, GroupLayer)
          .forEach((groupLayer) => floodMap.map.add(groupLayer))
      } else {
        const vectorTileLayer = new VectorTileLayer({
          id: vtLayer.name,
          url: getVectorTileUrl(vtLayer.name),
          opacity: 0.75,
          visible: false
        })
        floodMap.map.add(vectorTileLayer)
      }
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
      if (id === 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1') {
        const ccpLayers = map.allLayers.items.filter((ccpLayer) => ccpLayer.id === 'Flood_Zones_2_and_3_Rivers_and_Sea_CCP1')
        ccpLayers.forEach((ccpLayer) => {
          ccpLayer.visible = isVisible
          setStylePaintProperties(vtLayer, ccpLayer, isDark)
        })
      }
      const allLayers = layer.allLayers || [layer]
      allLayers.forEach((childLayer) => setStylePaintProperties(vtLayer, childLayer, isDark))
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
  const { baseMapStyles, digitisingMapStyles } = setUpBaseMaps(defraMapConfig, osAccountNumber)

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
    styles: baseMapStyles,
    search: {
      label: 'Search for a place',
      isAutocomplete: true,
      isExpanded: false,
      country: 'england'
    },
    legend: {
      width: '280px',
      isVisible: false,
      //    title: 'Menu',
      keyWidth: '360px',
      keyDisplay: 'min',
      segments: [{
        heading: 'Datasets',
        //      collapse: 'collapse',
        items: [
          {
            id: window.FMP_MAP_VERSION === 1 ? 'fz' : 'fzpd',
            label: 'Flood zones 2 and 3'
          },
          {
            id: 'fzcl',
            label: 'Flood zones 2 and 3 (2070 to 2125)'
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
        heading: terms.labels.climateChange,
        parentIds: window.FMP_MAP_VERSION === 1 ? ['fz'] : ['DONT_SHOW'],
        items: [
          {
            id: 'fzpd',
            label: terms.labels.presentDay
          },
          {
            id: 'fzcl',
            label: terms.labels.fzClimateChange
          }
        ]
      },
      {
        id: 'tf',
        heading: terms.labels.climateChange,
        parentIds: ['rsd', 'rsu'],
        items: [
          {
            id: 'pd',
            label: terms.labels.presentDay
          },
          {
            id: 'cl',
            label: 'Years 2070 to 2125'
          }
        ]
      },
      {
        id: 'af1',
        heading: terms.labels.annualLikelihood,
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
        heading: terms.labels.annualLikelihood,
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
        heading: terms.labels.annualLikelihood,
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
        {
          heading: terms.labels.mapFeatures,
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
          heading: terms.labels.mapFeatures,
          parentIds: ['fzcl'],
          items: [
            keyItemDefinitions.floodZone2PresentDay,
            keyItemDefinitions.floodZone3PresentDay,
            keyItemDefinitions.floodZone3CC,
            keyItemDefinitions.floodZoneNoData,
            keyItemDefinitions.waterStorageAreas,
            keyItemDefinitions.floodDefences,
            keyItemDefinitions.mainRivers
          ]
        },
        {
          heading: terms.labels.mapFeatures,
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
          heading: terms.labels.mapFeatures,
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
      // min zoom update to edit boundary zoom restriction
      maxZoom: 17,
      styles: digitisingMapStyles
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

    const { mode, segments, layers, style } = e.detail
    updateMapState(segments, layers, style)
    await addLayers()
    setTimeout(() => toggleVisibility(null, mode, segments, layers, floodMap.map, mapState.isDark), 1000)
    initPointerMove()

    floodMap.setInfo({
      width: '360px',
      label: 'Map hints',
      html: `<div> 
        </br><p class="govuk-body-s"><strong>How to query the map</p class="govuk-body-s"></strong>
        <p class="govuk-body">If using a mouse click on a point to find out more about the flood data held on that location.</p>
        <p class="govuk-body">If using a keyboard, navigate to the point, centering the crosshair at the location, then press enter.</p>
        <p class="govuk-body-s"><strong>Keyboard map controls</p class="govuk-body-s"></strong>
        <p class="govuk-body">Tab to the map and press Alt+K to view keyboard controls</p>
      </div>`
    })
  })

  document.addEventListener('click', e => {
    if (e.target.innerText === 'Get summary report') {
      window.location = '/' + window.APP_FOLDER + '/results'
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
      if (!visibleVtLayer || now - lastHit < throttleMs || floodMap.view.scale > minScale) {
        return
      }
      lastHit = now
      const layersToTest = visibleVtLayer.allLayers || [visibleVtLayer]
      floodMap.view.hitTest(e, { include: layersToTest }).then((response) => {
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

  const formatFloodSource = (floodSource = '') => {
    if (floodSource === 'Coastal') {
      return 'Sea'
    } else if (floodSource === 'Fluvial') {
      return 'River'
    }
    return floodSource[0].toUpperCase() + floodSource.slice(1)
  }

  const getTimeFrame = (feature) => {
    if (mapState.isClimateChange) {
      if (mapState.isFloodZone && feature.flood_zone !== terms.keys.fzCC && feature.flood_zone !== terms.keys.fzNoData) {
        return terms.labels.presentDay
      }
      return terms.labels.climateChange
    }
    return terms.labels.presentDay
  }

  const transformFeature = (features) => {
    if (!features.isPixelFeaturesAtPixel) {
      return null
    }
    const feature = { ...features.items[0] }
    feature.name = feature.name || feature.Name
    feature.flood_source = feature.flood_source || feature.Flood_source
    if (mapState.isFloodZone && mapState.isClimateChange) {
      // This Implies we have clicked on  CC ZONE
      // delete feature.flood_source -- awaiting confirmation from Lloyd on whether to show or hide this if available
      if (feature.name === 'Flood Zones plus climate change') {
        feature.flood_zone = terms.keys.fzCC
      }
      if (feature.name === 'Unavailable') {
        feature.flood_zone = terms.keys.fzNoData
      }
    }
    return feature
  }

  const getQueryContentHeader = (e) => {
    const { coord, features } = e.detail
    if (!features || !coord || !features.isPixelFeaturesAtPixel) {
      return {}
    }
    const feature = transformFeature(features)
    const timeFrame = getTimeFrame(feature)
    const listContents = [
      ['Easting and northing', `${Math.round(coord[0])},${Math.round(coord[1])}`],
      ['Timeframe', timeFrame]
    ]

    const vtLayer = feature && vtLayers.find(vtLayer => vtLayer.name === feature.layer)
    return { listContents, vtLayer, coord, feature }
  }

  const addQueryFloodZonesContent = (listContents, feature) => {
    if (!mapState.isFloodZone) {
      return ''
    }
    const floodZone = getFloodZoneFromFeature(feature, mapState)
    if (floodZone !== terms.keys.fzNoData && floodZone !== terms.keys.fzCC) {
      listContents.push(['Flood zone', floodZone])
    }

    if (floodZone !== terms.keys.fzNoData && feature.flood_source) {
      listContents.push(['Flood Source', formatFloodSource(feature.flood_source)])
    }
    return floodZone
  }

  const addQueryNonFloodZonesContent = (listContents, vtLayer) => {
    // This part is applicable for non Flood_Zones layers, when an area outside
    // of a zone has been clicked
    const dataset = getDataset()
    if (dataset) {
      listContents.push(['Dataset', dataset])
    }
    if (vtLayer?.likelihoodLabel) {
      listContents.push([terms.labels.aep, vtLayer.likelihoodLabel])
    }
    if (vtLayer?.chanceLabel) {
      listContents.push([terms.labels.annualLikelihood, vtLayer.chanceLabel])
    }
    if (vtLayer?.likelihoodchanceLabel) {
      listContents.push([terms.labels.aep, vtLayer.likelihoodchanceLabel])
    }
  }

  const getClimateChangeExtraContent = (floodZone) => (mapState.isClimateChange && floodZone === terms.keys.fzCC)
    ? `
    <h2 class="govuk-heading-s">Climate change allowances</h2>
    <p class="govuk-body-s">
      Flood zones plus climate change uses the following climate change allowances:
    </p>
    <ul class="govuk-list govuk-list--bullet">
      <li class='govuk-body-s'>
        peak river flow 'central' allowance, based on the 50th percentile for the 2080s epoch (2070 to 2125)
      </li>
      <li class='govuk-body-s'>
        sea and tidal flooding 'upper end' allowance to account for cumulative sea level rise to 2125, based on the 95th percentile
      </li>
    </ul>
    <p class="govuk-body-s">
      These have been taken from the Environment Agency's 
        <a href="https://www.gov.uk/guidance/flood-risk-assessments-climate-change-allowances" contenteditable="false" style="cursor: pointer;">
          Flood risk assessment: climate change allowances
        </a>
    </p>
    `
    : ''

  const getFloodZonesExtraContent = (floodZone) => {
    if (!mapState.isFloodZone) {
      return ''
    }
    const $findOutMoreLink = `<p class="govuk-body-s"> 
      <a href="how-to-use-flood-map-for-planning-data">
        Find out more about flood map for planning data and how it should be used
      </a>
    </p>`
    if (floodZone === terms.keys.fzNoData) {
      return `<h2 class="govuk-heading-s">Climate change data unavailable</h2>
        <p class="govuk-body-s">
          In some locations flood zones plus climate change data is not currently available while we make important improvements to our data.
        </p>
        ${$findOutMoreLink}`
    } else if (floodZone === terms.keys.fzCC) {
      return `<h2 class="govuk-heading-s">How to use flood zones plus climate change</h2>
        <p class="govuk-body-s">
          The flood zones plus climate change dataset shows how the combined extent of flood zones 2 and 3 could increase with climate change over the next century, ignoring the benefits of any existing flood defences.
        </p>
        ${$findOutMoreLink}`
    } else {
      return `<h2 class="govuk-heading-s">Updates to flood zones 2 and 3</h2>
        <p class="govuk-body-s">
          Flood zones 2 and 3 have been updated to include local detailed models, and a new improved national model.
        </p>`
    }
  }

  const getQueryExtraContent = (vtLayer, floodZone) => {
    let extraContent = ''
    extraContent += getFloodZonesExtraContent(floodZone)
    extraContent += getClimateChangeExtraContent(floodZone)
    return extraContent
  }

  const getTitle = (floodZone) => {
    switch (floodZone) {
      case terms.keys.fzNoData:
      case terms.keys.fzCC:
        return 'Flood zones plus climate change'
      case '2':
      case '3':
        return 'Flood zones'
      default:
        return getDataset()
    }
  }

  // Listen to map queries
  floodMap.addEventListener('query', e => {
    const { listContents, vtLayer, feature } = getQueryContentHeader(e)
    if (!listContents || !feature) {
      floodMap.setInfo(null)
      return
    }
    const floodZone = addQueryFloodZonesContent(listContents, feature)
    if (!floodZone) {
      addQueryNonFloodZonesContent(listContents, vtLayer)
    }

    const title = getTitle(floodZone)

    floodMap.setInfo(
      renderInfo(renderList(listContents),
        getQueryExtraContent(vtLayer, floodZone),
        '',
        title))
  })
})