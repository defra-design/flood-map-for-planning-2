const addCheckBoundaryPageRoutes = (router, folder) => {
  // =====================================
  // Location page
  // =====================================
  router.get('/check_boundary', function (req, res) {
    res.render(folder + '/check_boundary', {
      formAction: "/" + folder + "/check_boundary-check"
    })
  })

  router.post('/check_boundary-check', function (req, res) {
    const type = req.body.locationType

    if (type === 'placePost') {
      const query = req.body.locationPlacePost
      res.redirect('/' + folder + '/map?cz=504621.1,118518,15.912013')

    } else if (type === 'ngr') {
      const query = req.body.locationNGR
      res.redirect('/' + folder + '/results')

    } else if (type === 'eastNorth') {
      const e = req.body.easting
      const n = req.body.northing
      res.redirect('/' + folder + '/upload')
    }
  })
}

module.exports = addCheckBoundaryPageRoutes