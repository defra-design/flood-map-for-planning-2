const tokens = {}

let map, isDark, isRamp, VectorTileLayer, FeatureLayer, Point

const vtLayers = [
    { n: 'Flood_Zone_2_3_Rivers_and_Sea', s: '_N', v: '_VTP2', m: '_Model_Origin_Layer_gdb' },
    { n: 'Surface_water_spatial_planning_1in30', s: '_depth_N', v: '_depth_VTP_2', m: '_Model_Origin_Layer_gdb' },
    { n: 'Surface_water_spatial_planning_1in100', s: '_depth_N', v: '_depth_VTP', m: '_Model_Origin_Layer_gdb2' },
    { n: 'Surface_water_spatial_planning_1in1000', s: '_depth_N', v: '_depth_VTP', m: '_Model_Origin_Layer_gdb' },
    { n: 'Rivers_1in30_Sea_1in30_defended_depth', s: '_N', v: '_VTP', m: '_Model_Origin_Layer' },
    { n: 'Rivers_1in100_Sea_1in200_defended_depth', s: '_N', v: '_VTP', m: '_Model_Origin_Layer' },
    { n: 'Rivers_1in1000_Sea_1in1000_defended_depth', s: '_N', v: '_VTP_22', m: '_Model_Origin_Layer_gdb' },
    { n: 'Rivers_1in100_Sea_1in200_undefended_depth', s: '_N', v: '_VTP', m: '_Model_Origin_Layer_gdb' },
    { n: 'Rivers_1in1000_Sea_1in1000_undefended_depth', s: '_N', v: '_VTP', m: '_Model_Origin_Layer_gdb' },
    { n: 'Surface_water_spatial_planning_1in30_depth_CCP1', s: '_N', v: '_VTP', m: null },
    { n: 'Surface_water_spatial_planning_1in100_depth_CCP1', s: '_N', v: '_VTP', m: null },
    { n: 'Surface_water_spatial_planning_1in1000_depth_CCP1', s: '_N', v: '_VTP', m: null },
    { n: 'Rivers_1in30_Sea_1in30_defended_depth_CCP1', s: '_N', v: '_VTP', m: null },
    { n: 'Rivers_1in100_Sea_1in200_defended_depth_CCP1', s: '_N', v: '_VTP', m: null },
    { n: 'Rivers_1in1000_Sea_1in1000_defended_depth_CCP1', s: '_N', v: '_VTP', m: null },
    { n: 'Rivers_1in100_Sea_1in200_undefended_depth_CCP1', s: '_N', v: '_VTP', m: null },
    { n: 'Rivers_1in1000_Sea_1in1000_undefended_depth_CCP1', s: '_N', v: '_VTP', m: null },
]

const fLayers = [
    { n: 'nat_defences', q: 'fd'},
    { n: 'nat_fsa', q: 'wsa'}
]

const ids = [
    'fz',
    'swpdhr',
    'swpdmr',
    'swpdlr',
    'rsdpdhr',
    'rsdpdmr',
    'rsdpdlr',
    'rsupdmr',
    'rsupdlr',
    'swclhr',
    'swclmr',
    'swcllr',
    'rsdclhr',
    'rsdclmr',
    'rsdcllr',
    'rsuclmr',
    'rsucllr',
]

const addLayers = async (layers) => {
    vtLayers.forEach((layer, i) => {
        map.add(new VectorTileLayer({
            id: layer.n,
            style: {
                'version': 8,
                'sources': {
                    'esri': {
                        'type': 'vector',
                        'bounds': [-6.98694, 49.8816, 2.07537, 55.8333],
                        'minzoom': 4,
                        'maxzoom': 16,
                        'scheme': 'xyz',
                        'url': `https://tiles.arcgis.com/tiles/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer.n + layer.v}/VectorTileServer`
                    }
                },
                'layers': Array(i === 0 ? 2 : 7).fill(0).map((_, j) => { return {
                    'id': layer.n + j,
                    'type': 'fill',
                    'source': 'esri',
                    'source-layer': `${layer.n + layer.s}`,
                    'minzoom': 4.7597,
                    'filter': ['==', '_symbol', j],
                    'layout': {
                        'visibility': i === 0 ? getFloodZoneVisibility(j, layers) : 'visible'
                    },
                    'paint': {
                        'fill-color': i === 0 ? fillFloodZones(j) : fillModel(j),
                        'fill-opacity': 0.75
                    }
                }})
            },
            visible: false
        }))
    })
    fLayers.forEach(layer => {
        map.add(new FeatureLayer({
            id: layer.n,
            url: `https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer.n}/FeatureServer`,
            renderer: layer.n === 'nat_defences' ? renderFloodDefence() : renderFloodStorage(),
            visible: false
        }))
    })
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
          width: '2px',
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
            color: '#d4351c',
            outline: {
                color: '#d4351c',
                width: 1
            }
        }
    }
}

const getFloodZoneVisibility = (index, layers) => {
    const isVisible = layers.includes('fz23')
    return isVisible ? 'visible' : 'none'
}

const toggleVisibility = (type, mode, segments, layers) => {
    // Conditionally add/remove layers might offer better for performance
    const isDrawMode = ['draw', 'edit'].includes(mode)
    vtLayers.forEach((l, i) => {
        const id = l.n
        const layer = map.findLayerById(id)
        const isVisible = !isDrawMode && layer.id === vtLayers[i].n && segments.join('') === ids[i]
        const isModeChange = type === 'mode'
        layer.visible = isVisible
        Array(i === 0 ? 2 : 7).fill(0).forEach((_, j) => {
            const paintProperties = layer.getPaintProperties(id + j)
            if (paintProperties && isVisible && !isModeChange) {
                paintProperties['fill-color'] = i === 0 ? fillFloodZones(j) : fillModel(j)
                layer.setPaintProperties(id + j, paintProperties)
                if (i !== 0) return
                // Flood zones visiblity
                const visibility = getFloodZoneVisibility(j, layers)
                layer.setLayoutProperties(id + j, { 'visibility': visibility })
            }
        })
    })
    fLayers.forEach(l => {
        const layer = map.findLayerById(l.n)
        const isVisible = !isDrawMode && !segments.includes('fz') && layers.includes(l.q)
        layer.visible = isVisible
    })
}

const depthMap = ['over 2300', '2300', '1200', '900', '600', '300', '150'];


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
                            label: 'Climate change'
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
                    expandRampHeading: 'Maximum depth in millimeters', // Optional
                    collapseFillLabel: 'Extent only',
                    fill: 'default: #2b8cbe, dark: #7fcdbb', // Optional - sets ramp to initial collapse 
                     items: [
                         {
                             label: 'above 2300mm',
                            //  fill: 'default: #7f2704, dark: #f7fbff' //BLUE
                             fill: 'default: #7f2704, dark: #f7fcf5' //GREEN
                         },
                         {
                             label: '2300mm',
                            //  fill: 'default: #a63603, dark: #deebf7' //BLUE
                             fill: 'default: #a63603, dark: #e5f5e0' //GREEN
                         },
                         {
                             label: '1200mm',
                            //  fill: 'default: #d94801, dark: #c6dbef' //BLUE
                             fill: 'default: #d94801, dark: #c7e9c0' //GREEN

                         },
                         {
                             label: '900mm',
                            //  fill: 'default: #f16913, dark: #9ecae1' //BLUE
                             fill: 'default: #f16913, dark: #a1d99b' //GREEN
                         },
                         {
                             label: '600mm',
                            //  fill: 'default: #fd8d3c, dark: #6baed6' //BLUE
                             fill: 'default: #fd8d3c, dark: #74c476' //GREEN
                         },
                         {
                             label: '300mm',
                            //  fill: 'default: #fdae6b, dark: #4292c6' //BLUE
                             fill: 'default: #fdae6b, dark: #41ab5d' //GREEN
                         },
                         {
                             label: '150mm',
                            //  fill: 'default: #fdd0a2, dark: #2171b5' //BLUE
                             fill: 'default: #fdd0a2, dark: #238b45' //GREEN
                         }
                     ]
                },
                {
                    id: 'fz23',
                    type: 'symbol',
                    heading: 'Flood zones',
                    parentIds: ['fz'],
                    isSelected: true,
                    checked: true,
                    items: [
                        {
                            label: 'Flood zone 2',
                            fill: 'default: #00A4CD, dark: #41ab5d',
                            isSelected: true
                        },
                        {
                            label: 'Flood zone 3',
                            fill: 'default: #003078, dark: #e5f5e0',
                            isSelected: true
                        }
                    ]
                    
                },
                {
                    type: 'symbol',
                    heading: 'Map features',
                    parentIds: ['pd', 'cl','fz'],
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
            minZoom: 14,
            maxZoom: 20
        },
        queryPixel: vtLayers.map(l => l.n)
    })
    // Component is ready and we have access to map
    // We can listen for map events now, such as 'loaded'
    fm.addEventListener('ready', async e => {
        map = fm.map
        VectorTileLayer = fm.modules.VectorTileLayer
        FeatureLayer = fm.modules.FeatureLayer
        Point = fm.modules.Point
        const { mode, basemap, segments, layers } = e.detail
        isDark = basemap === 'dark'
        isRamp = layers.includes('md')
        await addLayers(layers)
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
    fm.addEventListener('query', async e => {
        const { resultType, point } = e.detail
        
        if (!resultType) {
            fm.info = null
            return
        }
        const result = e.detail.features[0]
        const name = result.layer.split('_VTP')[0]
        const layer = vtLayers.find(l => l.n === name)
        
        let attributes

        if (layer.m) {
            const model = new FeatureLayer({
                url: `https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services/${layer.n + layer.m}/FeatureServer`
            })
            const results = await model.queryFeatures({
                geometry: new Point({ x: point[0], y: point[1], spatialReference: 27700 }),
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
        // fm.info = {
        //     width: '360px',
        //     label: 'Information',
        //     html: `<p class="govuk-body-s">
        //         <strong>Easting and northing:</strong> ${Math.round(point.x)}, ${Math.round(point.y)}<br/>
        //         <strong>Maximum depth:</strong> ${depthMap[band]} metres<br/>
        //         <strong>Model name:</strong> ${attributes.model}</br/>
        //         <strong>Model year:</strong> ${attributes.model_year}</br/>
        //         <strong>Model scale:</strong> ${attributes.scale}</br/>

        //     </p>`
        // }


        const band = e.detail.features[0]._symbol
        const layerName = e.detail.features[0].layer
        const isRiversSeasDefended = layerName.includes('_defended')
        const isRiversSeasUnDefended = layerName.includes('undefended')
        const isFloodZone = layerName.includes('Zone')
        const is1in200 = layerName.includes('1in200')
        const is1in1000 = layerName.includes('1in1000')
        const is1in30 = layerName.includes('1in30')


        // const title = isFloodZone
        // ? `<strong>Flood zone</strong>: ${band + 2}<br>`
        // : `<strong>Maximum depth:</strong> ${depthMap[band]}metres<br/>`

        // Conditional text for flood zone
        const floodZoneText = isFloodZone
        ? `<strong>Flood zone:</strong> ${band + 2}<br>`
        : ''
        
        // Display the layer name with conditional logic
        const layerNameText = layerName
        ? `<strong>Layer:</strong> ${layerName}<br/>`
        : ''

        const model = attributes ? `
            <strong>Model:</strong> ${attributes.model}</br/>
            <strong>Model year:</strong> ${attributes.model_year}
        ` : ''

        const Defended = isRiversSeasDefended
        ? `<strong>Layer:</strong> Rivers and seas with defences<br/>`
        : ''

        const Undefended = isRiversSeasUnDefended
        ? `<strong>Layer:</strong> Rivers and seas without defences<br/>`
        : ''

        const medium = is1in200
        ? `<strong>Annual likelihood of flooding:</strong> 0.1% to 0.5%<br/>`
        : ''

        const low = is1in1000
        ? `<strong>Annual likelihood of flooding:</strong> Below 0.1%<br/>`
        : ''

        const high = is1in30
        ? `<strong>Annual likelihood of flooding:</strong> Above 3.3%<br/>`
        : ''

        fm.info = {
            width: '360px',
            label: 'Information',
            html: `
            
            
                <p class="govuk-body-s">
                <strong>Easting and northing:</strong> ${Math.round(point[0])},${Math.round(point[1])}<br/>
                ${floodZoneText}
                ${Defended}
                ${Undefended}
                ${high}
                ${medium}
                ${low}
                <strong>Timeframe:</strong> Present day<br/>
                <strong>Maximum depth:</strong> ${depthMap[band]} mm<br/>
                <strong>Model name:</strong> ${attributes.model}</br/>
                <strong>Model year:</strong> ${attributes.model_year}</br/>
                <strong>Model scale:</strong> ${attributes.scale}</br/>
                </p>`
        }
    })
})

