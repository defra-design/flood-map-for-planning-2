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
    const type = req.body.selectionType

    if (type === 'reviewShape') {
      const query = req.body.selectionReviewShape
      res.redirect('/' + folder + '/map?cz=504621.1,118518,15.912013')

    } else if (type === 'results') {
      const query = req.body.selectionResults
      res.redirect('/' + folder + '/results')

    } else if (type === 'chooseAgain') {
      const query = req.body.selectionChooseAgain
      res.redirect('/' + folder + '/upload')
    }
  })
}

module.exports = addCheckBoundaryPageRoutes