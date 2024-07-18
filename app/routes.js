//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

const authESRI = require('./esri-auth')
const authOS = require('./os-auth')

router.use((req, res, next) => {
    res.locals.env = process.env
    next()
})

router.get('/esri-token', async (req, res, next) => {
    const response = await authESRI({
        clientId: process.env.ESRI_CLIENT_ID,
        clientSecret: process.env.ESRI_CLIENT_SECRET
    })
    res.json({ token: response })
})

router.get('/os-token', async (req, res, next) => {
    const response = await authOS({
        clientId: process.env.OS_CLIENT_ID,
        clientSecret: process.env.OS_CLIENT_SECRET
    })
    res.send(response)
})
