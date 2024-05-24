//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.use((req, res, next) => {
    res.locals.osApiKey = process.env.OS_API_KEY
    res.locals.styleUrl = process.env.STYLE_URL
    res.locals.aerialUrl = process.env.AERIAL_URL
    next()
})
