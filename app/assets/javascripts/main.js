
let map, view, isDark, isRamp, segments, VectorTileLayer, FeatureLayer, Point

const vtLayers = [
  { n: 'Flood_Zone_2_3_Rivers_and_Sea', s: '_N', v: '_VTP2', m: '_Model_Origin_Layer', q: 'fz' },
  { n: 'Surface_water_spatial_planning_1in100', s: '_depth_N', v: '_depth', m: '_depth_Model_Origin_Layer_gdb2', q: 'swhr' },
  // { n: 'Surface_water_spatial_planning_1in30', s: '_VTP', v: '_depth_VTP', m: 'Model_Origin_Layer_gdb', q: 'swhr' },
  { n: 'Surface_water_spatial_planning_1in100', s: '_depth_N', v: '_depth', m: '_depth_Model_Origin_Layer_gdb2', q: 'swmr' },
  { n: 'Surface_water_spatial_planning_1in1000', s: '_depth_N', v: '_depth_VTP', m: '_depth_Model_Origin_Layer_gdb', q: 'swlr' },
  { n: 'Rivers_1in30_Sea_1in30_defended_depth', s: '_N', v: '', m: '_Model_Origin_Layer', q: 'rsdpdhr' },
  { n: 'Rivers_1in100_Sea_1in200_defended_depth', s: '_N', v: '_VTP', m: '_Model_Origin_Layer_gdb', q: 'rsdpdmr' },
  { n: 'Rivers_1in1000_Sea_1in1000_defended_depth', s: '_N', v: '_VTP_22', m: '_Model_Origin_Layer_gdb', q: 'rsdpdlr' },
  { n: 'Rivers_1in100_Sea_1in200_undefended_depth', s: '_N', v: '_VTP', m: '_Model_Origin_Layer_gdb', q: 'rsupdmr' },
  { n: 'Rivers_1in1000_Sea_1in1000_undefended_depth', s: '_N', v: '_VTP', m: '_Model_Origin_Layer_gdb', q: 'rsupdlr' },
  // { n: 'Surface_water_spatial_planning_1in30_depth_CCP1', s: '_N', v: '_VTP', m: null, q: 'swclhr' },
  // { n: 'Surface_water_spatial_planning_1in100_depth_CCP1', s: '_N', v: '_VTP', m: null, q: 'swclmr' },
  // { n: 'Surface_water_spatial_planning_1in1000_depth_CCP1', s: '_N', v: '_VTP', m: null, q: 'swcllr' },
  { n: 'Rivers_1in30_Sea_1in30_defended_depth_CCP1', s: '_N', v: '_VTP', m: null, q: 'rsdclhr' },
  { n: 'Rivers_1in30_Sea_1in30_defended_depth_CCP1', s: '_N', v: '_VTP', m: null, q: 'rsdclmr' },
  // { n: 'Rivers_1in100_Sea_1in200_defended_depth_CCP1', s: '_N', v: '_VTP', m: null, q: 'rsdclmr' },
  { n: 'Rivers_1in1000_Sea_1in1000_defended_depth_CCP1', s: '_N', v: '_VTP', m: null, q: 'rsdcllr' },
  { n: 'Rivers_1in100_Sea_1in200_undefended_depth_CCP1', s: '_N', v: '_VTP', m: null, q: 'rsuclmr' },
  { n: 'Rivers_1in1000_Sea_1in1000_undefended_depth_CCP1', s: '_N', v: '', m: null, q: 'rsucllr' },
]

const fLayers = [
  { n: 'nat_defences', q: 'fd'},
  { n: 'nat_fsa', q: 'fsa'}, 
  { n: 'Statutory_Main_River_Map', q: 'mainr'}
]

const addLayers = async (layers) => {
  vtLayers.forEach((layer, i) => {
    map.add(new VectorTileLayer({
      id: layer.n,
      style: {
        version: 8,
        sources: {
          esri: {
            type: 'vector',
            minzoom: 4,
            maxzoom: 16,
            scheme: 'xyz',
            url: `https://tiles.arcgis.com/tiles/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer.n + layer.v}/VectorTileServer`
          }
        },
        layers: Array(i === 0 ? 2 : 7).fill(0).map((_, j) => {
          return {
            id: layer.n + j,
            type: 'fill',
            source: 'esri',
            'source-layer': `${layer.n + layer.s}`,
            minzoom: 4.7597,
            filter: ['==', '_symbol', j],
            layout: {
              visibility: 'visible' // i === 0 ? getFloodZoneVisibility(layers) : 'visible'
            },
            paint: {
              'fill-color': i === 0 ? fillFloodZones(j) : fillModel(j),
              'fill-opacity': 0.75
            }
          }
        })
      },
      visible: false
    }))
  })
  fLayers.forEach(layer => {
    let renderer;

    if (layer.n === 'nat_defences') {
        renderer = renderFloodDefence();
        console.log("Applying renderFloodDefence to:", layer.n);
    } else if (layer.n === 'nat_fsa') {
        renderer = renderFloodStorage();
        console.log("Applying renderFloodStorage to:", layer.n);
    } else if (layer.n === 'Statutory_Main_River_Map') {
        renderer = renderStatutory_Main_River_Map();
        console.log("Applying renderStatutory_Main_River_Map to:", layer.n);
    } else {
        console.error("No renderer assigned for:", layer.n);
    }

    map.add(new FeatureLayer({
        id: layer.n,
        url: `https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer.n}/FeatureServer`,
        renderer: renderer,
        visible: false
    }));
  });
}

const fillModel = (band) => {
  const light = '#2b8cbe'
  const dark = '#7fcdbb'
  const depthLight = ['#7f2704', '#a63603', '#d94801', '#f16913', '#fd8d3c', '#fdae6b', '#fdd0a2'] // light tones > 2300 to < 150
  // const depthDark = ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5'] // BLUES dark tones > 2300 to < 150
  const depthDark = ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45'] // GREENS dark tones > 2300 to < 150
  return isRamp ? isDark ? depthDark[band] : depthLight[band] : isDark ? dark : light
}

const fillFloodZones = (zone) => {
  const light = ['#1d70b8', '#003078'] // light tones Zone 2, Zone 3
  const dark = ['#41ab5d', '#e5f5e0'] // dark tones Zone 2, Zone 3
  return isDark ? dark[zone] : light[zone]
}

const renderFloodDefence = () => {
  return {
      type: 'simple',
      symbol: {
        type: 'simple-line',
        width: '3px',
      //  color: '#f47738'
      color: '#12393d'
      }
  }
}

const renderStatutory_Main_River_Map = () => {
  return {
      type: 'simple',
      symbol: {
        type: 'simple-line',
        width: '3px',
        color: '#f47738'
      }
  }
}

const renderFloodStorage = () => {
  return {
      type: 'simple',
      symbol: {
          type: 'simple-fill',
          style: 'diagonal-cross',
          color: '#12393d',
          outline: {
          //    color: '#d4351c',
          color: '#12393d',
              width: 1
          }
      }
  }
}

// const getFloodZoneVisibility = (layers) => {
//   const isVisible = layers.includes('fz23')
//   return isVisible ? 'visible' : 'none'
// }

const toggleVisibility = (type, mode, segments, layers) => {
  // Conditionally add/remove layers might offer better for performance
  const isDrawMode = ['frame', 'draw'].includes(mode)
  vtLayers.forEach((l, i) => {
    const id = l.n
    const layer = map.findLayerById(id)
    // const isVisibleLyr = vtLayers[i].q === 'fz' || ['fe', 'md'].some(l => layers.includes(l))
    // const isVisible = !isDrawMode && isVisibleLyr && segments.join('') === vtLayers[i].q
    const isVisible = !isDrawMode && segments.join('') === vtLayers[i].q
    const isModeChange = type === 'mode'
    layer.visible = isVisible
    Array(i === 0 ? 2 : 7).fill(0).forEach((_, j) => {
      const paintProperties = layer.getPaintProperties(id + j)
      if (paintProperties && isVisible && !isModeChange) {
        paintProperties['fill-color'] = i === 0 ? fillFloodZones(j) : fillModel(j)
        layer.setPaintProperties(id + j, paintProperties)
        // if (i !== 0) return
        // Flood zones visiblity
        // const visibility = getFloodZoneVisibility(layers)
        // layer.setLayoutProperties(id + j, { visibility })
      }
    })
  })
  fLayers.forEach(l => {
    const layer = map.findLayerById(l.n)
    const isVisible = !isDrawMode && layers.includes(l.q)
    layer.visible = isVisible
    // Re-colour feature layers
  })
}

const getSymbols = () => {
  return ['water-storage', 'flood-defence'].map(s => `/public/images/${s}.svg`)
}

const symbols = getSymbols()

const depthMap = ['over 2.3', '2.3', '1.2', '0.9', '0.6', '0.3', '0.15']

let isInfoOpen = false

const fm = new defra.FloodMap('map', {
  framework: 'esri',
  type: 'hybrid',
  place: 'Ambleside',
  zoom: 16,
  minZoom: 6,
  maxZoom: 20,
  centre: [324973, 536891],
  height: '750px',
  hasGeoLocation: true,
  symbols,
  requestCallback: getRequest,
  // geocodeProvider: 'esri-world-geocoder',
  styles: {
    tokenCallback: getEsriToken,
    interceptorsCallback: getInterceptors,
    defaultUrl: '/styles/OS_VTS_27700_Open_Outdoor.json',
    darkUrl: '/styles/OS_VTS_27700_Open_Dark.json' 
  },
  search: {
    label: 'Search for a place',
    isAutocomplete: true,
    isExpanded: false
  },
  legend: {
    width: '280px',
    // display: 'compact',
    isVisible: true,
    title: 'Menu',
    keyWidth: '360px',
    keyDisplay: 'min',
    segments: [
      {
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
                label: 'Rivers and sea 3.3%'
            },
            {
                id: 'mr',
                label: 'Rivers 1% Sea 0.5%'
            },
            {
                id: 'lr',
                label: 'Rivers and sea 1%'
            }
        ]
      },
      {
          id: 'af1',
          heading: 'Annual likelihood of flooding',
          collapse: 'collapse',
          parentIds: ['sw'],
          items: [
              {
                  id: 'hr',
                  label: '3.3%'
              },
              {
                  id: 'mr',
                  label: '1%'
              },
              {
                  id: 'lr',
                  label: '0.1%'
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
                  label: 'Rivers 1% Sea 0.5%'
              },
              {
                  id: 'lr',
                  label: 'Rivers and sea 1%'
              }
          ]
      }
    ],
    key: [
      // {
      //   heading: 'Flood extent and depth',
      //   parentIds: ['pd', 'cl'],
      //   collapse: 'collapse',
      //   type: 'radio',
      //   items: [
      //     {
      //       id: 'na',
      //       label: 'Hidden'
      //     },
      //     {
      //       id: 'fe',
      //       label: 'Flood extent',
      //       fill: 'default: #ff0000, dark: #00ff00',
      //       isSelected: true
      //     },
      //     {
      //       id: 'md',
      //       label: 'Maximum depth in metres',
      //       display: 'ramp',
      //       numLabels: 3,
      //       items: [
      //         {
      //           label: 'above 2.3',
      //           fill: 'default: #08589e, dark: #00ff00'
      //         },
      //         {
      //           label: '2.3',
      //           fill: '#2b8cbe'
      //         },
      //         {
      //           label: '1.2',
      //           fill: '#4eb3d3'
      //         },
      //         {
      //           label: '0.9',
      //           fill: '#7bccc4'
      //         },
      //         {
      //           label: '0.6',
      //           fill: '#a8ddb5'
      //         },
      //         {
      //           label: '0.3',
      //           fill: '#ccebc5'
      //         },
      //         {
      //           label: '0.15',
      //           fill: '#f0f9e8'
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   heading: 'Map features',
      //   parentIds: ['fz'],
      //   collapse: 'collapse',
      //   items: [
      //     {
      //       id: 'fz23',
      //       label: 'Flood zones',
      //       isSelected: true,
      //       items: [
      //         {
      //           label: 'Flood zone 1',
      //           fill: '#00A4CD'
      //         },
      //         {
      //           label: 'Flood zone 2',
      //           fill: '#003078'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'fsa',
      //       label: 'Water storage',
      //       icon: symbols[0],
      //       fill: 'default: #d4351c, dark: #00703c'
      //     },
      //     {
      //       id: 'fd',
      //       label: 'Flood defence',
      //       icon: symbols[1],
      //       fill: '	#f47738'
      //     }
      //   ]
      // },
      // {
      //   heading: 'Map features',
      //   parentIds: ['pd', 'cl'],
      //   collapse: 'collapse',
      //   items: [
      //     {
      //       id: 'fsa',
      //       label: 'Water storage',
      //       icon: symbols[0],
      //       fill: 'default: #d4351c, dark: #00703c'
      //     },
      //     {
      //       id: 'fd',
      //       label: 'Flood defence',
      //       icon: symbols[1],
      //       fill: '	#f47738'
      //     }
      //   ]
      // },
      {
        heading: 'Map features',
        parentIds: ['fz'],
        collapse: 'collapse',
        items: [
            {
                label: 'Flood zone 2',
                fill: 'default: #1d70b8, dark: #41ab5d'
            },
            {
                label: 'Flood zone 3',
                fill: 'default: #003078, dark: #e5f5e0'
            },
            {
                id: 'fsa',
                label: 'Water storage',
                icon: symbols[0],
                fill: 'default: #12393d, dark: #12393d'
            },
            {
                id: 'fd',
                label: 'Flood defence',
                icon: symbols[1],
              //  fill: '	#f47738'
                  fill: '#12393d'
            },
            {
                id: 'mainr',
                label: 'Main Rivers',
                icon: symbols[1],
                fill: '	#f47738'
            }
        ]
      },
      {
        heading: 'Map features',
        parentIds: ['rsd', 'rsu', 'sw'],
        collapse: 'collapse',
        items: [
            {
                label: 'Flood extent',
                fill: 'default: #2b8cbe, dark: #7fcdbb'
            },
            {
                id: 'fsa',
                label: 'Water storage',
                icon: symbols[0],
                fill: 'default: #12393d, dark: #12393d'
            },
            {
                id: 'fd',
                label: 'Flood defence',
                icon: symbols[1],
              //  fill: '	#f47738'
                  fill: '#12393d'
            },
            {
                id: 'mainr',
                label: 'Main Rivers',
                icon: symbols[1],
                fill: '	#f47738'
            }
        ]
      },
      {
        heading: 'Map features',
        parentIds: ['mo'],
        collapse: 'collapse',
        items: [
            {
                id: 'fsa',
                label: 'Water storage',
                icon: symbols[0],
                fill: 'default: #12393d, dark: #12393d'
            },
            {
                id: 'fd',
                label: 'Flood defence',
                icon: symbols[1],
              //  fill: '	#f47738'
                  fill: '#12393d'
            },
            {
                id: 'mainr',
                label: 'Main Rivers',
                icon: symbols[1],
                fill: '	#f47738'
            }
        ]
      }
    ]
  },
  // info: {
  //     markerCoord: [337297, 503995],
  //     hasData: true,
  //     width: '360px',
  //     label: '[dynamic title]',
  //     html: '<p class="govuk-body-s">[dynamic body]</p>'
  // },
  queryPolygon: {
    heading: 'Site boundary',
    submitLabel: 'Get site report',
    helpLabel: 'How to draw a shape',
    keyLabel: 'Report area',
    html: '<p class="govuk-body-s">Instructions</p>',
    defaultUrl: '/styles/OS_VTS_27700_Outdoor.json',
    darkUrl: '/styles/OS_VTS_27700_Dark.json',
    minZoom: 12,
    maxZoom: 21
  },
  queryPixel: vtLayers.map(l => l.n)
})

// Component is ready and we have access to map
// We can listen for map events now, such as 'loaded'
fm.addEventListener('ready', async e => {
  VectorTileLayer = fm.modules.VectorTileLayer
  FeatureLayer = fm.modules.FeatureLayer
  Point = fm.modules.Point
  map = e.detail.map
  view = e.detail.view
  const { mode, basemap, layers } = e.detail
  segments = e.detail.segments
  isDark = basemap === 'dark'
  isRamp = layers.includes('md')
  await addLayers(layers)
  toggleVisibility(null, mode, segments, layers)
})

// Listen for mode, segments, layers or style changes
fm.addEventListener('change', e => {
  const { type, mode, basemap, segments, layers } = e.detail
  if (['layer', 'segment'].includes(type)) {
    fm.info = null
  }
  isDark = basemap === 'dark'
  isRamp = layers.includes('md')
  toggleVisibility(type, mode, segments, layers)
})

// Listen to map queries
fm.addEventListener('query', async e => {
  const { coord, features } = e.detail
  const feature = features.isPixelFeaturesAtPixel ? features.items[0] : null
  const floodZoneText = segments.includes('fz')
  const isDefended = segments.includes('rsd')
  const isUnDefended = segments.includes('rsu')
  const isSWater = segments.includes('sw')
  const isSurfaceWaterHighRisk = ['sw', 'pd', 'hr'].every(item => segments.includes(item));
  const isDefendedMed = ['rsd','mr'].every(item => segments.includes(item));
  const isClimate = segments.includes('cl')
  const isSWNoData = ['sw', 'pd', 'mr'].every(item => segments.includes(item));
  const isSWNoDataLr = ['sw', 'pd', 'lr'].every(item => segments.includes(item));

  const climate = isClimate
  ? `<div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">
          <span class="govuk-body-s"><strong><strong>Timeframe</strong></strong></span>
      </dt>
      <dd class="govuk-summary-list__value">
          <span class="govuk-body-s">Climate change</span>
      </dd>
      </div>`
      : '<div class="govuk-summary-list__row"><dt class="govuk-summary-list__key"><span class="govuk-body-s"><strong><strong>Timeframe</strong></strong></span></dt><dd class="govuk-summary-list__value"><span class="govuk-body-s">Present day</span></dd></div>'


  const floodZoneOne = floodZoneText
  ? `          
      <div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key govuk-!-width-one-half">
          <span class="govuk-body-s"><strong><strong>Flood zone</strong></strong></span>

      </dt>
      <dd class="govuk-summary-list__value">
          <span class="govuk-body-s">1</span>
      </dd>
      </div>`
      : ''

  const SWater = isSWater
  ? `          
      <div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key govuk-!-width-one-half">
          <span class="govuk-body-s"><strong><strong>Dataset</strong></strong></span>
  
      </dt>
      <dd class="govuk-summary-list__value">
          <span class="govuk-body-s">Surface water</span>
      </dd>
      </div>`
      : ''


  const surfaceHighRisk = isSurfaceWaterHighRisk
      // High risk
      // <div class="govuk-summary-list__row">
      //   <dt class="govuk-summary-list__key">
      //   <span class="govuk-body-s"><strong>Annual likelihood of flood</strong></span>
      //   </dt>
      //   <dd class="govuk-summary-list__value">
      //   <span class="govuk-body-s">3.3%</span>
      //   </dd>
      // </div>
      ? ``
      : ''

  const mediumDefended = isDefendedMed
  ? `  
      
      `
      : ''

  const sWNoData = isSWNoData
//    Medium risk
//  <div class="govuk-summary-list__row">
//     <dt class="govuk-summary-list__key">
//     <span class="govuk-body-s"><strong>Annual likelihood of flood</strong></span>
//     </dt>
//     <dd class="govuk-summary-list__value">
//     <span class="govuk-body-s">1%</span>
//     </dd>
//   </div> 
  ? ``
      : ''

  const sWNoDataLr = isSWNoDataLr
//    Low risk
//     <div class="govuk-summary-list__row">
//     <dt class="govuk-summary-list__key">
//     <span class="govuk-body-s"><strong>Annual likelihood of flood</strong></span>
//     </dt>
//     <dd class="govuk-summary-list__value">
//     <span class="govuk-body-s">1%</span>
//     </dd>
//   </div> 
  ? ``
      : ''

  const riversSeaDefended = isDefended
      ? `<div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">
      <span class="govuk-body-s"><strong><strong>Dataset</strong></strong></span>
      </dt>
      <dd class="govuk-summary-list__value">
      <span class="govuk-body-s">Rivers and seas with defences</span>
      </dd>
      </div>`
      : ''

  const riversSeaUnDefended = isUnDefended
      ? `<div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">
      <span class="govuk-body-s"><strong><strong>Dataset</strong></strong></span>
      </dt>
      <dd class="govuk-summary-list__value">
      <span class="govuk-body-s">Rivers and seas without defences</span>
      </dd>
      </div>`
      : ''

  console.log(e.detail)
  console.log(segments)
  if (!feature) {
      fm.info = {
          width: '360px',
          label: 'Information',
          html: `
          <dl class="govuk-summary-list govuk-!-margin-bottom-3">
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key govuk-!-width-one-half">
              <span class="govuk-body-s"><strong>Easting and northing</strong></span>
              </dt>
              <dd class="govuk-summary-list__value">
              <span class="govuk-body-s">${Math.round(coord[0])},${Math.round(coord[1])}</span>
              </dd>
          </div>
          ${climate}
          ${floodZoneOne}
          ${riversSeaDefended}
          ${riversSeaUnDefended}
          ${mediumDefended}
          ${SWater}
          ${surfaceHighRisk}
          ${sWNoData}
          ${sWNoDataLr}
          </dl>
          
          
              
          `
      }
      return
  }
  
  const layer = vtLayers.find(l => l.q === feature.layer)

  let attributes

  console.log(layer)
  console.log(feature.layer)
  if (layer.m) {
      const model = new FeatureLayer({
          url: `https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer.n + layer.m}/FeatureServer`
      })
      const results = await model.queryFeatures({
          geometry: new Point({ x: coord[0], y: coord[1], spatialReference: 27700 }),
          outFields: ['*'],
          spatialRelationship: 'intersects',
          distance: 1,
          units: 'meters',
          returnGeometry: false
      })
      if (results.features.length) {
          attributes = results.features[0].attributes
      }
  }
  console.log(attributes)
  // const fSource = attributes.flood_source
  const rsmodel = new FeatureLayer({
      url: `https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/FeatureClassPublish_gdb/FeatureServer/0`
  })
  const results = await rsmodel.queryFeatures({
      geometry: new Point({ x: coord[0], y: coord[1], spatialReference: 27700 }),
      outFields: ['*'],
      spatialRelationship: 'intersects',
      distance: 1,
      units: 'meters',
      returnGeometry: false
  })
  const {flood_source: fSource} = results.features[0] ? results.features[0].attributes : {}

  const band = feature._symbol
  const layerName = layer.n
  const isFloodZone = segments.includes('fz')
  const isRiversSeasDefended = segments.includes('rsd')
  const isClimateChange = segments.includes('cl')
  const isRiversSeasUnDefended = segments.includes('rsu')
  const is1in200 = layerName.includes('1in200')
  const is1in1000 = layerName.includes('Sea_1in1000')
  const is1in30 = layerName.includes('Sea_1in30')
  const isSW1in30 = layerName.includes('spatial_planning_1in30_depth_CCP1')
  const isSW1in100 = layerName.includes('Surface_water_spatial_planning_1in100_depth_CCP1')
  const isSW1in1000 = layerName.includes('Surface_water_spatial_planning_1in1000_depth_CCP1')
  const isSurfaceWater = segments.includes('sw')
  const availableDepth = ['rsu', 'rsd', 'sw'].some(item => segments.includes(item));

  isInfoOpen = true
  console.log(layerName)

  const floodSource = isFloodZone && fSource
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
      <span class="govuk-body-s"><strong><strong>Flood source</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
      <span class="govuk-body-s">${fSource}</span>
  </dd>
  </div>`
  : ''   

  const title = isFloodZone
  ? `<div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">
          <span class="govuk-body-s"><strong><strong>Flood zone</strong></strong></span>
      </dt>
      <dd class="govuk-summary-list__value">
          <span class="govuk-body-s">${band + 2}</span>
      </dd>
  </div>`
  : ''

  const model = attributes ? `
  <div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong>Model title</strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">${attributes.model}</span>
  </dd>
  </div>   

  <div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong>Model year</strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s"> ${attributes.model_year}</span>
  </dd>
  </div>                  

  <div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong>Model scale</strong></span> 
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">${attributes.scale}</span>
  </dd>
  </div>
  ` : ''

  const timeframe = isClimateChange
      ? `<div class="govuk-summary-list__row">
          <dt class="govuk-summary-list__key">
              <span class="govuk-body-s"><strong><strong>Timeframe</strong></strong></span>
          </dt>
          <dd class="govuk-summary-list__value">
              <span class="govuk-body-s">Climate change</span>
          </dd>
      </div>`
      : '<div class="govuk-summary-list__row"><dt class="govuk-summary-list__key"><span class="govuk-body-s"><strong><strong>Timeframe</strong></strong></span></dt><dd class="govuk-summary-list__value"><span class="govuk-body-s">Present day</span></dd></div>'

  const Defended = isRiversSeasDefended
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong><strong>Dataset</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">Rivers and seas with defences</span>
  </dd>
  </div>`
  : ''

  const Undefended = isRiversSeasUnDefended
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong><strong>Dataset</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">Rivers and seas without defences</span>
  </dd>
  </div>`
  : ''

  const surfaceWater = isSurfaceWater
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong><strong>Dataset</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">Surface water</span>
  </dd>
  </div>`
  : ''

  const medium = is1in200
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong>Annual likelihood of flooding</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">Rivers 1% Sea 0.5%</span>
  </dd>
  </div>`
  : ''

  const swLowCC = isSW1in1000
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong>Annual likelihood of flooding</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">1%</span>
  </dd>
  </div>`
  : ''

  const swMedCC = isSW1in100
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong>Annual likelihood of flooding</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">1%</span>
  </dd>
  </div>`
  : ''

  const swHighCC = isSW1in30
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong>Annual likelihood of flooding</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">3.3%</span>
  </dd>
  </div>`
  : ''

  const low = is1in1000
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong><strong>Annual likelihood of flooding</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">Rivers and sea 1%</span>
  </dd>
  </div>`
  : ''

  const high = is1in30
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong><strong>Annual likelihood of flooding</strong></strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">Rivers and sea 3.3%</span>
  </dd>
  </div>`
  : ''

  const maxDepth = availableDepth
  ? `<div class="govuk-summary-list__row">
  <dt class="govuk-summary-list__key">
  <span class="govuk-body-s"><strong>Maximum depth</strong></span>
  </dt>
  <dd class="govuk-summary-list__value">
  <span class="govuk-body-s">${depthMap[band]}mm</span>
  </dd>
  </div>`
  : ''

  // const floodZoneLowRisk = isSegmentfz23
  // ? `
  // <span class="govuk-body-s">This location sits outside of a flood zone</span>
  // `
  // : ''

  fm.info = {
      width: '360px',
      label: 'Information',
      html: `
          <dl class="govuk-summary-list govuk-!-margin-bottom-3">
              <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key govuk-!-width-one-half">
              <span class="govuk-body-s"><strong>Easting and northing</strong></span>
              </dt>
              <dd class="govuk-summary-list__value">
              <span class="govuk-body-s">${Math.round(coord[0])},${Math.round(coord[1])}</span>
              </dd>
              </div>
              ${timeframe}
              ${title}
              ${Undefended}
              ${Defended}
              ${surfaceWater}
              ${medium}
              ${low}
              ${high}
              ${surfaceHighRisk}
              ${swLowCC}
              ${swMedCC}
              ${swHighCC}
              ${floodSource}
          </dl>

      `
  }
})