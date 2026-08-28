const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const blackAndWhiteMap = require('./styles/OS_VTS_27700_Black_and_White.json')
const masterMap = require('./styles/OS_VTS_27700_Outdoor.json')
const masterMapDark = require('./styles/OS_VTS_27700_Dark.json')
const openTile = require('./styles/open-tile.json')
const vtsTile = require('./styles/vts-tile.json')

const folder = 'v3-8-0-0'

// Add your routes here

require('./router/addLocalsMiddleware')(router, folder)
// set up route variable results page option
require('./router/addResultsPageRoutes')(router, folder)
require('./router/addLocationPageRoutes')(router, folder)
require('./router/addTriagePageRoutes')(router, folder)
require('./router/addCheckBoundaryPageRoutes')(router, folder)

router.get('/defra-map/config', function (req, res) {
  res.json({
    version: 'v3-8-0-0',
    OS_ACCOUNT_NUMBER: '12345678',
    layerNameSuffix: '_NON_PRODUCTION',
    agolServiceUrl: 'https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services',
    agolVectorTileUrl: 'https://tiles.arcgis.com/tiles/JZM7qJpmv7vJ0Hzx/arcgis/rest/services'
  })
})

router.get('/map/styles/open-tile.json', (req, res) => res.json(openTile))
router.get('/map/styles/vts-tile.json', (req, res) => res.json(vtsTile))
router.get('/map/styles/black-and-white-map', (req, res) => res.json(blackAndWhiteMap))
router.get('/map/styles/master-map', (req, res) => res.json(masterMap))
router.get('/map/styles/master-map-dark', (req, res) => res.json(masterMapDark))

router.get('/defra-map/info-panel', async (req, res) => {
  const params = req.query
  res.render(`${folder}/info-panel`, { ...params, gaId: '12345' })
})

router.get('/map-help', (req, res) => res.redirect('/v3-8-0-0/help'))
router.get('/results', (req, res) => res.redirect('/v3-8-0-0/results'))
router.get('/product-one', (req, res) => res.redirect('v3-7-0-3/product1-3'))

module.exports = router
