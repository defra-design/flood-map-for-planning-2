const express = require('express');
const router = express.Router();

var folder = "v1"
var servicename = "Flood map for planning";

// HTML for standard buttons
var backlink = '<a href="javascript:history.back()" class="govuk-back-link">Back</a>'

// Add your routes here

router.use(function (req, res, next) {
  // set a folder and store in locals
  // this can then be used in pages as {{folder}}
  res.locals.folder=folder
  res.locals.backlink=backlink
  // permit and autostore data set in all statement at bottom
  res.locals.permit=res.locals.data
  next()
});

// radio options to direct to map or triaging away from FMFP ============
router.get('/options-radio', function (req, res) {
  res.render(folder + '/options-radio',{
    "formAction":"/"+ folder + "/options-radio-check"
  })
})

router.post('/location/catigories', function (req, res) {
  res.render(folder + '/options-radio',{
    "formAction":"/"+ folder + "/options-radio-check"
  })
})

// dirceting to regions
router.post('/options-radio-check', function (req, res) {
  if (req.body['triage']=="planning") {
    res.redirect("/v1/map?id=&qxy=&cz=416803.7324857929,350039.18434241525,6.839382")
} else if (req.body['triage']=="buySell"){
    res.redirect("https://www.gov.uk/check-long-term-flood-risk")
} else if (req.body['triage']=="pastFlood"){
  res.redirect("https://www.gov.uk/request-flooding-history")
} else if (req.body['triage']=="insurance"){
res.redirect("https://www.gov.uk/check-long-term-flood-risk")
} else if (req.body['triage']=="notListed"){
  res.redirect("https://www.gov.uk/browse/environment-countryside/flooding-extreme-weather")
}
})

// IN PROGRESS ============
router.get('/contact', function (req, res) {
  res.render(folder + '/contact',{
    "formAction":"/"+ folder + "/contact-check"
  })
})

router.post('/contact', function (req, res) {
  res.render(folder + '/contact',{
    "formAction":"/"+ folder + "/contact-check"
  })
})

// dirceting to correct flood zone
router.post('/contact-check', function (req, res) {
  var floodZone = req.body.floodZone

    if (req.session.data.floodZone==="fz1") {
      res.redirect("/"+ folder + "/summary-fz3")
    } else if (req.session.data.floodZone==="fz2"){
      res.redirect("/"+ folder + "/summary-fz3")
    } else if (req.session.data.floodZone==="fz3"){
      res.redirect("/"+ folder + "/summary-fz3")    
    } else if (req.session.data.floodZone==="fzd"){
      res.redirect("/"+ folder + "/summary-fzd")  
    }
})


module.exports = router;
