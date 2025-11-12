class FloodMapLayer {
  constructor ({ name, q, styleLayers, layerVisibilityFilter, likelihoodchanceLabel, getVtLayer, setStyleProperties }) {
    this.name = name
    this.q = q
    this.styleLayers = styleLayers
    this.layerVisibilityFilter = layerVisibilityFilter
    this.likelihoodchanceLabel = likelihoodchanceLabel
    this.getVtLayer = getVtLayer
    // this.setStyleProperties = setStyleProperties
  }

  static injectedModules = {}

  // static set modules ({VectorTileLayer, FeatureLayer}) {
  //   FloodMapLayer.injectedModules = { ...FloodMapLayer.injectedModules, VectorTileLayer, FeatureLayer }
  // }

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

  isStyleLayerVisible (segments, segmentsToMatch) {
    if (segmentsToMatch) {
      return segmentsToMatch.find(segment => segments.includes(segment)) !== undefined
    }
    return true
  }

  setStyleProperties (opacity) {
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
}

export { FloodMapLayer }
