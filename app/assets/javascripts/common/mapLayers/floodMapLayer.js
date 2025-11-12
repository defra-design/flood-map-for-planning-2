class FloodMapLayer {
  constructor ({ name, q, styleLayers, layerVisibilityFilter, likelihoodchanceLabel, logStyles }) {
    this.name = name
    this.q = q
    this.styleLayers = styleLayers
    this.layerVisibilityFilter = layerVisibilityFilter
    this.likelihoodchanceLabel = likelihoodchanceLabel
    this.logStyles = logStyles
  }

  static injectedModules = {}

  static get modules () {
    return FloodMapLayer.injectedModules
  }

  static initialise ({ mapState, modules, config }) {
    if (mapState) {
      FloodMapLayer.mapState = mapState
    }
    if (modules) {
      FloodMapLayer.injectedModules = { ...FloodMapLayer.injectedModules, ...modules }
    }
    if (config) {
      FloodMapLayer.config = config
    }
  }

  get mapState () {
    return FloodMapLayer.mapState
  }

  get isDark () {
    return FloodMapLayer.mapState?.isDark
  }

  getVectorTileUrl (name) {
    return `${FloodMapLayer.config.agolVectorTileUrl}/${name + FloodMapLayer.config.layerNameSuffix}/VectorTileServer`
  }

  get vectorTileUrl () {
    return this.getVectorTileUrl(this.name)
  }

  set visible (visible) {
    this.vectorTileLayer.visible = visible
  }

  get visible () {
    return this.vectorTileLayer.visible
  }

  addToMap (map) {
    const { VectorTileLayer } = FloodMapLayer.modules
    this.vectorTileLayer = new VectorTileLayer({
      id: this.name,
      url: this.vectorTileUrl,
      opacity: 1,
      visible: false
    })
    map.add(this.vectorTileLayer)
  }

  isLayerVisible (segments) {
    const segmentsToMatch = this.layerVisibilityFilter
    if (segmentsToMatch) {
      return segmentsToMatch.every(segment => segments.includes(segment))
    }
    return segments.join('') === this.q
  }

  isStyleLayerVisible (segments, segmentsToMatch) {
    if (segmentsToMatch) {
      return segmentsToMatch.find(segment => segments.includes(segment)) !== undefined
    }
    return true
  }

  setStyleProperties (opacity) {
    if (this.logStyles) {
      this.logStyleLayers()
    }
    this.styleLayers.forEach(([styleLayerName, paintProperties, styleLayerFilters]) => {
      const layerPaintProperties = this.vectorTileLayer.getPaintProperties(styleLayerName)
      if (layerPaintProperties) {
        const fillColour = paintProperties[this.isDark ? 1 : 0]
        layerPaintProperties['fill-color'] = fillColour
        layerPaintProperties['fill-opacity'] = this.isStyleLayerVisible(this.mapState.segments, styleLayerFilters) ? opacity : 0
        this.vectorTileLayer.setPaintProperties(styleLayerName, layerPaintProperties)
      }
    })
  }

  // Set this.logStyles to true to dump the styleLayers for each vector layer
  // They don't seem to be defined anywhere server side, so Paul is anxious that
  // they may change when new layers are published.
  logStyleLayer (vectorTileLayer) {
    const { styleRepository = {} } = vectorTileLayer
    const { layers: styleLayers = [] } = styleRepository
    styleLayers.forEach((styleLayer) => {
      console.log(styleLayer.id)
    })
  }

  logStyleLayers () {
    console.log('\n', this.name, 'styles:')
    this.logStyleLayer(this.vectorTileLayer)
    this.logStyles = false // stop it happening lots of times
  }
}

export { FloodMapLayer }
