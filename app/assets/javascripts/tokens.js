const osAuth = {}
const esriAuth = {}

// ESRI return an array of interceptor objects
export const getInterceptors = () => {
  return [{
    urls: 'https://api.os.uk/maps/vector/v1/vts',
    before: async params => {
      const token = (await getOsToken()).token
      params.requestOptions.headers = {
        Authorization: 'Bearer ' + token
      }
    }
  }]
}

// All other requests can be asyncronous and return a request object itself
export const getRequest = async (url) => {
  let options = {}

  // OS Open Names
  if (url.startsWith('https://api.os.uk')) {
    const token = (await getOsToken()).token
    options = {headers: { Authorization: 'Bearer ' + token }}
  }

  // ESRI World Geocoder
  if (url.startsWith('https://geocode-api.arcgis.com')) {
    const token = (await getEsriToken()).token
    url = `${url}&token=${token}`
  }

  return new Request(url, options)
}

export const getEsriToken = async () => {
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

const getOsToken = async () => {
  // Check token is valid
  const isExpired = !Object.keys(osAuth).length || Date.now() >= osAuth?.expiresAt

  if (isExpired) {
    try {
      const response = await fetch('/os-token', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      osAuth.token = json.access_token
      osAuth.expiresAt = Date.now() + ((json.expires_in - 30) * 1000)
    } catch (err) {
      console.log('Error getting OS access token: ', err)
    }
  }

  return osAuth
}

export const getDefraMapConfig = async () => ({
  layerNameSuffix: "_NON_PRODUCTION",
  agolServiceUrl: "https://services1.arcgis.com/JZM7qJpmv7vJ0Hzx/arcgis/rest/services",
  agolVectorTileUrl: "https://tiles.arcgis.com/tiles/JZM7qJpmv7vJ0Hzx/arcgis/rest/services",
  mapStyleUrl: '/styles/OS_VTS_27700_Open_Outdoor.json',
  darkMapStyleUrl: '/styles/OS_VTS_27700_Open_Dark.json',
  masterMapUrl: '/styles/polygon-default.json',
  masterMapDarkUrl: '/styles/polygon-dark.json',
  blackAndWhiteMapStyleUrl: '/styles/OS_VTS_27700_Black_and_White.json'
})