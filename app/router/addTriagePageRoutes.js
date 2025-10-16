const addTriagePageRoutes = (router, folder) => {
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
}

module.exports = addTriagePageRoutes