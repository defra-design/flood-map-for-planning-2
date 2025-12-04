const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const folder = "v3-6-0-0"

// Add your routes here

require('./router/addLocalsMiddleware')(router, folder)
// set up route variable results page option
require('./router/addResultsPageRoutes')(router, folder)
require('./router/addLocationPageRoutes')(router, folder)
require('./router/addTriagePageRoutes')(router, folder)

module.exports = router
