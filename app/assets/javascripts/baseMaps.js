const mapStyles = {}

const setUpBaseMaps = (defraMapConfig, osAccountNumber) => {
  const currentYear = new Date().getFullYear()
  const osAttributionHyperlink = `<a href="/os-terms" class="os-credits__link"> Contains OS data &copy; Crown copyright and database rights ${currentYear} </a>`
  const osMasterMapAttributionHyperlink = `<a href="/os-terms" class="os-credits__link">&copy; Crown copyright and database rights ${currentYear} OS ${osAccountNumber} </a>`
  Object.assign(mapStyles, {
    outdoor: {
      displayName: 'Outdoor',
      url: defraMapConfig.mapStyleUrl,
      attribution: osAttributionHyperlink,
      digitisingUrl: defraMapConfig.masterMapUrl,
      digitisingAttribution: osMasterMapAttributionHyperlink,
      iconUrl: '/public/images/outdoor-map-icon.jpg'
    },
    dark: {
      displayName: 'Dark',
      url: defraMapConfig.darkMapStyleUrl,
      attribution: osAttributionHyperlink,
      digitisingUrl: defraMapConfig.masterMapDarkUrl,
      digitisingAttribution: osMasterMapAttributionHyperlink,
      iconUrl: '/public/images/dark-map-icon.jpg'
    },
    blackAndWhite: {
      displayName: 'Black and white',
      url: defraMapConfig.blackAndWhiteMapStyleUrl,
      attribution: osAttributionHyperlink,
      digitisingUrl: defraMapConfig.blackAndWhiteMasterMapStyleUrl,
      digitisingAttribution: osMasterMapAttributionHyperlink,
      iconUrl: '/public/images/black-and-white-map-icon.jpg'
    }
  })

  const baseMapStyles = Object.entries(mapStyles)
    .map(([name, { url, attribution, displayName, iconUrl }]) => ({ name, url, attribution, displayName, iconUrl }))

  const digitisingMapStyles = Object.entries(mapStyles)
    .map(([name, { digitisingUrl: url, digitisingAttribution: attribution, displayName, iconUrl }]) => ({ name, url, attribution, displayName, iconUrl }))

  return { mapStyles, baseMapStyles, digitisingMapStyles }
}

export { setUpBaseMaps }
