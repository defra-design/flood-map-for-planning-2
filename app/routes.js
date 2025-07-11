//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const fs = require('fs')
const path = require('path')


// Add your routes here

// all routes for FMFP with defra componant
router.use('/v1', require('./routes_v1'))

// set up route variable location page option
router.get('/results-a', function (req, res) {
	req.session.data = { resultsType: 'resultsA' }
	res.redirect(`/v1/results`)
})

// set up route variable about map page option
router.get('/about-map-b', function (req, res) {
	req.session.data = { floodZone: 'fz3', resultsType: 'resultsA', aboutMap: 'optionB' }
	res.redirect(`/v1/start`)
})

// set up route variable location page option
router.get('/results-b', function (req, res) {
	req.session.data = { resultsType: 'resultsB' }
	res.redirect(`/v1/results`)
})

// set up route variable e2e fz1
router.get('/fz1', function (req, res) {
	req.session.data = { floodZone: 'fz1', resultsType: 'resultsA' }
	res.redirect(`/v1/start`)
})

// set up route variable e2e fz2
router.get('/fz2', function (req, res) {
	req.session.data = { floodZone: 'fz2', resultsType: 'resultsA' }
	res.redirect(`/v1/start`)
})

// set up route variable e2e fz3
router.get('/fz3', function (req, res) {
	req.session.data = { floodZone: 'fz3', resultsType: 'resultsA' }
	res.redirect(`/v1/start`)
})

// set up route variable e2e fzd
router.get('/fzd', function (req, res) {
	req.session.data = { floodZone: 'fzd', resultsType: 'resultsA' }
	res.redirect(`/v1/start`)
})

// // Direct to map from location page when radios ==============================================================

// set up route variable location page option
// router.get('/skipLink', function (req, res) {
// 	req.session.data = { locationOption: 'skipLink' }
// 	res.redirect(`/start`)
// })

// // set up route variable location page option
// router.get('/radioOption', function (req, res) {
// 	req.session.data = { locationOption: 'radioLink' }
// 	res.redirect(`/start`)
// })


const authESRI = require('./esri-auth')
const authOS = require('./os-auth')

router.use((req, res, next) => {
    res.locals.env = process.env
    next()
})

router.get('/esri-token', async (req, res, next) => {
    const response = await authESRI({
        clientId: process.env.ESRI_CLIENT_ID,
        clientSecret: process.env.ESRI_CLIENT_SECRET
    })
    res.json({ token: response })
})

router.get('/os-token', async (req, res, next) => {
    const response = await authOS({
        clientId: process.env.OS_CLIENT_ID,
        clientSecret: process.env.OS_CLIENT_SECRET
    })
    res.send(response)
})

router.get([
    '/styles/vts-tile.json',
    '/styles/open-tile.json',
    '/styles/OS_VTS_27700_Outdoor.json',
    '/styles/OS_VTS_27700_Open_Outdoor.json',
    '/styles/OS_VTS_27700_Dark.json',
    '/styles/OS_VTS_27700_Open_Dark.json',
    '/styles/polygon-default.json',
    '/styles/polygon-dark.json',
    '/styles/OS_VTS_27700_Black_and_White.json'
  ], async (req, res, next) => {
    fs.readFile(path.resolve(__dirname, req.originalUrl.substring(1).split('?')[0]), (err, result) => {
      if (err) throw err
      const jsonData = JSON.parse(result)
      res.setHeader('Content-Type', 'application/json')
      res.json(jsonData)
    })
  })

//V1 with full summary page (including climate change)
router.get('/v1-cc', function (req, res) {
	req.session.data = { mapType: 'v1CC' }
	res.redirect(`/v1/location`)
})

//V2 with summary page without climate change (no data)
router.get('/v2-cc', function (req, res) {
	req.session.data = { mapType: 'v2CC' }
	res.redirect(`/v1/location`)
})

//V2 with summary page without climate change (no data)
router.get('/v2-pd', function (req, res) {
	req.session.data = { mapType: 'v2Pd' }
	res.redirect(`/v1/location`)
})

//V1 with full summary page (including climate change)
router.get('/v1-pd', function (req, res) {
	req.session.data = { mapType: 'v1Pd' }
	res.redirect(`/v1/location`)
})

//V2 with summary page without climate change (no data)
router.get('/v2-ccpd', function (req, res) {
	req.session.data = { mapType: 'v2PdCC' }
	res.redirect(`/v1/location`)
})

//V1 with full summary page (including climate change)
router.get('/v1-ccpd', function (req, res) {
	req.session.data = { mapType: 'v1PdCC' }
	res.redirect(`/v1/location`)
})

module.exports = router
