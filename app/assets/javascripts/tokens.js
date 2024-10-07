const osAuth = {}
const esriAuth = {}

const getOsToken = async () => {
    // Check token is valid
    const isExpired = !Object.keys(osAuth).length || Date.now() >= osAuth?.expiresAt

    if (isExpired) {
        try {
            const response = await fetch('/os-token')
            const json = await response.json()
            osAuth.token = json.access_token
            osAuth.expiresAt = Date.now() + ((json.expires_in - 30) * 1000)
        } catch (err) {
            console.log('Error getting OS access token: ', err)
        }
    }

    return osAuth
}

const getEsriToken = async () => {
    // *ESRI manages this somehow?
    const hasToken = esriAuth.token

    if (!hasToken) {
        try {
            const response = await fetch('/esri-token')
            const json = await response.json()
            esriAuth.token = json.token
        } catch (err) {
            console.log('Error getting ESRI access token: ', err)
        }
    }

    return esriAuth
}