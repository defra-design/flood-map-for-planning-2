const tokens = {}
let map, isDark, isRamp, VectorTileLayer, FeatureLayer, Point
const vtLayers = [
    { n: 'Surface_water_spatial_planning_1in30_depth', v: '_VTP_2', m: '_Model_Origin_Layer_gdb' },
    { n: 'Surface_water_spatial_planning_1in100_depth', v: '_VTP', m: '_Model_Origin_Layer_gdb2' },
    { n: 'Surface_water_spatial_planning_1in1000_depth', v: '_VTP', m: '_Model_Origin_Layer_gdb' },
    { n: 'Rivers_1in30_Sea_1in30_defended_depth', v: '_VTP', m: '_Model_Origin_Layer' },
    { n: 'Rivers_1in1000_Sea_1in1000_defended_depth', v: '_VTP_22', m: '_Model_Origin_Layer_gdb' },
    { n: 'Rivers_1in100_Sea_1in200_undefended_depth', v: '_VTP', m: '_Model_Origin_Layer_gdb' },
    { n: 'Rivers_1in1000_Sea_1in1000_undefended_depth', v: '_VTP', m: '_Model_Origin_Layer_gdb' }
]
const fLayers = [
    // { n: 'nat_defences', q: 'fd'}
]
const ids = [
    'swpdhr',
    'swpdmr',
    'swpdlr',
    'rsdpdhr',
    'rsdpdlr',
    'rsupdmr',
    'rsupdlr'
]
const addLayers = () => {
    vtLayers.forEach(layer => {
        map.add(new VectorTileLayer({
            id: layer.n + layer.v,
            style: style(layer.n + layer.v),
            visible: false
        }))
    })
    fLayers.forEach(layer => {
        map.add(new FeatureLayer({
            id: layer.n,
            url: `https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer.n}/FeatureServer`,
            visible: false
        }))
    })
}
const style = (layer) => {
    return {
        'version': 8,
        'sources': {
            'esri': {
                'type': 'vector',
                'bounds': [-6.98694, 49.8816, 2.07537, 55.8333],
                'minzoom': 4,
                'maxzoom': 16,
                'scheme': 'xyz',
                'url': `https://tiles.arcgis.com/tiles/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer}/VectorTileServer`
            }
        },
        'layers': [
            {
                'id': layer,
                'type': 'fill',
                'source': 'esri',
                'source-layer': `${layer.split('_VTP')[0]}_N`,
                'minzoom': 4.7597,
                'paint': {
                    'fill-color': ['match',
                        ['get', '_symbol'],
                        0, isRamp ? isDark ? '#08589e' : '#7f2704' : isDark ? '#2b8cbe' : '#2b8cbe', // > 2300 (darkDpeth, lightDepth, darkSingle, lightSingle)
                        1, isRamp ? isDark ? '#2b8cbe' : '#a63603' : isDark ? '#2b8cbe' : '#2b8cbe', // 1200-2300
                        2, isRamp ? isDark ? '#4eb3d3' : '#d94801' : isDark ? '#2b8cbe' : '#2b8cbe', // 900-1200
                        3, isRamp ? isDark ? '#7bccc4' : '#f16913' : isDark ? '#2b8cbe' : '#2b8cbe', // 600-900
                        4, isRamp ? isDark ? '#a8ddb5' : '#fd8d3c' : isDark ? '#2b8cbe' : '#2b8cbe', // 300-600
                        5, isRamp ? isDark ? '#ccebc5' : '#fdae6b' : isDark ? '#2b8cbe' : '#2b8cbe', // 150-300
                        6, isRamp ? isDark ? '#f0f9e8' : '#fdd0a2' : isDark ? '#2b8cbe' : '#2b8cbe', // > 150
                        isDark ? '#2b8cbe' : '#2b8cbe' // Extent only (darkSingle, lightSingle)
                    ],
                    'fill-opacity': 0.75
                }
            }
        ]
    }
}
const toggleVisibility = (type, mode, segments, layers) => {
    // Conditionally add/remove layers might offer better for performance
    const isDrawMode = ['draw', 'edit'].includes(mode)
    vtLayers.forEach((l, i) => {
        const layer = map.findLayerById(l.n + l.v)
        const isVisible = !isDrawMode && layer.id === (vtLayers[i].n + vtLayers[i].v) && segments.join('') === ids[i]
        const isModeChange = type === 'mode'
        layer.visible = isVisible
        if (isVisible && !isModeChange) {
            layer.loadStyle(style(layer.id))
        }
    })
    fLayers.forEach(l => {
        const layer = map.findLayerById(l.n)
        const isVisible = layers.includes(l.q)
        layer.visible = isVisible
    })
}
const depthMap = ['over 2.3', '2.3', '1.2', '0.9', '0.6', '0.3', '0.15']
                        
Promise.all([getOsToken(tokens), getEsriToken(tokens)]).then(() => {
    const fm = new defraMap.FloodMap('map', {
        type: 'hybrid',
        place: 'Ambleside',
        zoom: 14,
        minZoom: 6,
        maxZoom: 18,
        centre: [337297, 503995],
        height: '800px',
        provider: {
            name: 'esri',
            tokens: tokens,
            defaultUrl: '{{ env.ESRI_DEFAULT_URL }}',
            darkUrl: '{{ env.ESRI_DARK_URL }}',
            // aerialUrl: '{{ env.ESRI_AERIAL_URL }}',
            reverseGeocodeProvider: 'esri-world-geocoder',
            reverseGeocodeToken: tokens.esri,
            // reverseGeocodeProvider: 'os-open-names',
            // reverseGeocodeToken: '{{ env.OS_API_KEY }}',
            imagesPath: '/plugin-assets/%40defra%2Fflood-map/plugin/images',
            symbolPath: '/public/images/symbols',
            symbolName: ['flood-defence', 'main-river', 'water-storage']
        },
        search: {
            label: 'Search for a place',
            isAutocomplete: true,
            hasGeoLocation: true,
            // provider: 'os-open-names',
            // token: '{{ env.OS_API_KE }}'Y
            provider: 'esri-world-geocoder',
            token: tokens.esri
        },
        legend: {
            // width: '360px',
            // display: 'inset',
            // isVisible: true,
            title: 'Menu',
            keyDisplay: 'none',
            isPersistInUrl: true,
            symbolPath: '/public/images/symbols',
            segments: [
                {
                    heading: 'Datasets',
                    // collapse: 'collapse',
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
                            label: '2040\'s to 2060\'s'
                        }
                    ]
                },
                {
                    id: 'af1',
                    heading: 'Annual likelihood of flooding',
                    collapse: 'collapse',
                    parentIds: ['rsd', 'sw'],
                    items: [
                        {
                            id: 'hr',
                            label: 'Above 3.3%'
                        },
                        {
                            id: 'mr',
                            label: '0.1% to 0.5%'
                        },
                        {
                            id: 'lr',
                            label: 'Below 0.1%'
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
                            label: '0.1% to 0.5%'
                        },
                        {
                            id: 'lr',
                            label: 'below 0.1%'
                        }
                    ]
                }
            ],
            key: [
                {
                    id: 'md',
                    type: 'ramp',
                    parentIds: ['pd', 'cl'],
                    heading: 'Flood extent and depth',
                    collapse: 'collapse',
                    expandRampHeading: 'Maximum depth in metres', // Optional
                    collapseFillLabel: 'Extent only',
                    fill: '#2b8cbe', // Optional - sets ramp to initial collapse 
                     items: [
                         {
                             label: 'above 2.3',
                             fill: '#7f2704'
                         },
                         {
                             label: '2.3',
                             fill: '#a63603'
                         },
                         {
                             label: '1.2',
                             fill: '#d94801'
                         },
                         {
                             label: '0.9',
                             fill: '#f16913'
                         },
                         {
                             label: '0.6',
                             fill: '#fd8d3c'
                         },
                         {
                             label: '0.3',
                             fill: '#fdae6b'
                         },
                         {
                             label: '0.15',
                             fill: '#fdd0a2'
                         }
                     ]
                },
                {
                    type: 'symbol',
                    heading: 'Map features',
                    parentIds: ['fz'],
                    isSelected: true,
                    items: [
                        {
                            id: 'fz2',
                            label: 'Flood zone 2',
                            fill: '#00A4CD',
                            isSelected: true
                        },
                        {
                            id: 'fz3',
                            label: 'Flood zone 3',
                            fill: '#003078',
                            isSelected: true
                        }
                    ]
                },
                {
                    type: 'symbol',
                    heading: 'Map features',
                    parentIds: ['pd', 'cl'],
                    collapse: 'collapse',
                    isSelected: true,
                    items: [
                        {
                            id: 'wsa',
                            label: 'Water storage area',
                            icon: 'water-storage'
                        },
                        {
                            id: 'fd',
                            label: 'Flood defence',
                            icon: 'flood-defence'
                        },
                        {
                            id: 'mr',
                            label: 'Main river',
                            icon: 'main-river'
                        }
                    ]
                }
            ]
        },
        draw: {
            heading: 'Get information for a boundary',
            startLabel: 'Draw boundary',
            finishLabel: 'Finish and get report',
            helpLabel: 'How to draw a shape',
            html: '<p class="govuk-body-s">Instructions</p>',
            defaultUrl: '{{ env.OS_VTAPI_DEFAULT_DRAW_URL }}',
            darkUrl: '{{ env.OS_VTAPI_DARK_DRAW_URL }}',
            minZoom: 12,
            maxZoom: 16
        },
        queryPixel: vtLayers.map(l => l.n + l.v)
    })
    // Component is ready and we have access to map
    // We can listen for map events now, such as 'loaded'
    fm.addEventListener('ready', async e => {
        map = fm.map
        const { mode, basemap, segments, layers } = e.detail
        VectorTileLayer = e.detail.VectorTileLayer
        FeatureLayer = e.detail.FeatureLayer
        Point = e.detail.Point
        isDark = basemap === 'dark'
        isRamp = layers.includes('md')
        addLayers()
        toggleVisibility(null, mode, segments, layers)
    })
    // Listen for segments, layers or style changes
    fm.addEventListener('change', e => {
        const { type, mode, basemap, segments, layers } = e.detail
        isDark = basemap === 'dark'
        isRamp = layers.includes('md')
        toggleVisibility(type, mode, segments, layers)
    })
    // Listen to map queries
    fm.addEventListener('query', e => {
        const { resultType, point } = e.detail
        
        if (!resultType) {
            fm.info = null
            return
        }
        const result = e.detail.features[0]
        const name = result.layer.split('_VTP')[0]
        const layer = vtLayers.find(l => l.n === name)
        const model = new FeatureLayer({
            url: `https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer.n + layer.m}/FeatureServer`
        })
        model.queryFeatures({
            geometry: new Point({ x: point.x, y: point.y, spatialReference: 27700 }),
            outFields: ['*'],
            spatialRelationship: 'intersects',
            distance: 1,
            units: 'meters',
            returnGeometry: false
        }).then(results => {
            const band = e.detail.features[0]._symbol
            let attributes
            if (results.features.length) {
                attributes = results.features[0].attributes
            }
            console.log(attributes)
            fm.info = {
                width: '360px',
                label: 'Information',
                html: `<p class="govuk-body-s">
                    <strong>Easting and northing:</strong> ${Math.round(point.x)}, ${Math.round(point.y)}<br/>
                    <strong>Maximum depth:</strong> ${depthMap[band]} metres<br/>
                    <strong>Model name:</strong> ${attributes.model}</br/>
                    <strong>Model year:</strong> ${attributes.model_year}</br/>
                    <strong>Model scale:</strong> ${attributes.scale}</br/>

                </p>`
            }
        })
    })
})