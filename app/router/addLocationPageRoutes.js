const addLocationPageRoutes = (router, folder) => {
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
}

module.exports = addLocationPageRoutes