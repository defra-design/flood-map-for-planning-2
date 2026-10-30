const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const folder = 'v3-10-0-0'

// This version is a design proof of concept (separate flood zone 2 and 3 climate change layers).
// The wireframes live in app/views/design-spec/fz-climate-change-layers-v3-10-0-0 because the
// interactive map is a shared component that can't be changed from this prototype.

require('./router/addLocalsMiddleware')(router, folder)

module.exports = router
