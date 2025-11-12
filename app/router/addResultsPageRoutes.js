// const addResultsPageRoutes = (router, folder) => {
//   router.get('/300ha', function (req, res) {
//     req.session.data = { shapeType: '300ha' }
//     res.redirect("/" + folder + "/results")
//   })
//   // set up route variable results page option
//   router.get('/shapeValid', function (req, res) {
//     req.session.data = { shapeType: 'valid' }
//     res.redirect("/" + folder + "/results")
//   })
// }

const addResultsPageRoutes = (router, folder) => {
  router.get('/300ha', function (req, res) {
    req.session.data = { shapeType: '300ha' }
    res.redirect("/v3-5-0-1/results")
  })
  // set up route variable results page option
  router.get('/shapeValid', function (req, res) {
    req.session.data = { shapeType: 'valid' }
    res.redirect("/v3-5-0-1/results")
  })
}

module.exports = addResultsPageRoutes