const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const folder = "{{VERSION_ID}}"

// Add your routes here

require('./router/addLocalsMiddleware')(router, folder)

// Add version-specific route handlers as needed
// Examples (uncomment and modify as needed):
// require('./router/addResultsPageRoutes')(router, folder)
// require('./router/addLocationPageRoutes')(router, folder)
// require('./router/addTriagePageRoutes')(router, folder)

module.exports = router

<!-- TEMPLATE VARIABLES (replace in skill):
  {{VERSION_ID}} = folder version ID (e.g., v3-9-0-0)
-->
