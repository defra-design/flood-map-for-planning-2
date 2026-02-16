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
      res.redirect('/' + folder + '/map?cz=453599.2,175053.5,19.505469&polygon=[[453553.14,175066.61],[453551.31,175080.65],[453557.79,175081.49],[453558.85,175070.12],[453564.52,175070.96],[453565.12,175068.01],[453569.17,175068.33],[453568.87,175070.8],[453580.34,175072.95],[453579.61,175075.38],[453584.34,175076.35],[453584.7,175073.69],[453607.34,175077.52],[453607.37,175075.96],[453610.81,175076.45],[453612.08,175071.77],[453607.9,175070.69],[453608.22,175069.56],[453598.82,175068.09],[453599.24,175066.29],[453594.58,175064.9],[453593.72,175067.2],[453589.18,175066.7],[453590.02,175063.56],[453591.3,175063.82],[453593.3,175051.07],[453586.92,175049.81],[453584.78,175062.92],[453585.65,175063.06],[453585.17,175066.06],[453581.48,175065.73],[453581.7,175063.47],[453576.54,175062.31],[453576.14,175064.72],[453571.94,175064.05],[453572.44,175061.98],[453561.15,175060.15],[453559.54,175067.43],[453553.14,175066.61]]')

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