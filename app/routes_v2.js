const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

var folder = "v2"
var servicename = "Flood map for planning";

// HTML for standard buttons
var backlink = '<a href="javascript:history.back()" class="govuk-back-link">Back</a>'

// Add your routes here
router.use(function (req, res, next) {
  res.locals.folder = folder
  res.locals.backlink = backlink
  res.locals.permit = res.locals.data
  next()
})

// =====================================
// Location page
// =====================================
router.get('/location', function (req, res) {
  res.render(folder + '/location', {
    formAction: "/" + folder + "/location-check"
  })
})

router.post('/location-check', function (req, res) {
  const type = req.body.locationType

  if (type === 'placePost') {
    const query = req.body.locationPlacePost
    res.redirect('/' + folder + '/map')

  } else if (type === 'ngr') {
    const query = req.body.locationNGR
    res.redirect('/' + folder + '/map')

  } else if (type === 'eastNorth') {
    const e = req.body.easting
    const n = req.body.northing
    res.redirect('/' + folder + '/map')

  } else {
    // fallback if no selection
    res.redirect('/' + folder + '/map')
  }
})

// =====================================
// Existing options-radio flow
// =====================================
router.get('/options-radio', function (req, res) {
  res.render(folder + '/options-radio', {
    formAction: "/" + folder + "/options-radio-check"
  })
})

router.post('/options-radio', function (req, res) {
  res.render(folder + '/options-radio', {
    formAction: "/" + folder + "/options-radio-check"
  })
})

router.post('/options-radio-check', function (req, res) {
  if (req.body['triage'] == "planning") {
    res.redirect("/" + folder + "/location")
  } else if (req.body['triage'] == "buySell") {
    res.redirect("https://www.gov.uk/check-long-term-flood-risk")
  } else if (req.body['triage'] == "pastFlood") {
    res.redirect("https://www.gov.uk/request-flooding-history")
  } else if (req.body['triage'] == "insurance") {
    res.redirect("https://www.gov.uk/check-long-term-flood-risk")
  } else if (req.body['triage'] == "notListed") {
    res.redirect("https://www.gov.uk/browse/environment-countryside/flooding-extreme-weather")
  }
})

module.exports = router
