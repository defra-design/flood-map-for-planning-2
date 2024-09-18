//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const fs = require('fs')
const path = require('path')

// Add your routes here

// Direct to map from location page when radios ==============================================================

router.get('/options-radio', function (req, res) {
    res.render('/options-radio',{
        "formAction":"/options-radio-check"
    })
  })

  router.post('/options-radio', function (req, res) {
    res.render('/options-radio',{
        "formAction":"/options-radio-check"
    })
  })
  
  // Route to check if an alert or warning has been selected
  router.post('/options-radio-check', function (req, res) {
    if (req.body['triage']=="planning") {
        res.redirect("/map?id=&qxy=&cz=416803.7324857929,350039.18434241525,6.839382")
    } else if (req.body['triage']=="buySell"){
        res.redirect("https://www.gov.uk/check-long-term-flood-risk")
    } else if (req.body['triage']=="pastFlood"){
      res.redirect("https://www.gov.uk/request-flooding-history")
    } else if (req.body['triage']=="notEngland"){
    res.redirect("https://flood-map-for-planning.service.gov.uk/england-only")
}
  })

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
    '/styles/open-tile.json',
    '/styles/OS_VTS_27700_Outdoor.json',
    '/styles/OS_VTS_27700_Open_Outdoor.json',
    '/styles/OS_VTS_27700_Dark.json',
    '/styles/OS_VTS_27700_Open_Dark.json'
  ], async (req, res, next) => {
    fs.readFile(path.resolve(__dirname, req.originalUrl.substring(1).split('?')[0]), (err, result) => {
      if (err) throw err
      const jsonData = JSON.parse(result)
      res.setHeader('Content-Type', 'application/json')
      res.json(jsonData)
    })
  })

   