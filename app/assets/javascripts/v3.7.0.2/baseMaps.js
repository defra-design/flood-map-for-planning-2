const mapStyles = {}

const setUpBaseMaps = (defraMapConfig, osAccountNumber) => {
  const currentYear = new Date().getFullYear()
  const osMasterMapAttributionHyperlink = `<a href="/os-terms" class="os-credits__link">&copy; Crown copyright and database rights ${currentYear} OS ${osAccountNumber} </a>`
  Object.assign(mapStyles, {
    outdoor: {
      displayName: 'Outdoor',
      url: defraMapConfig.mapStyleUrl,
      attribution: osMasterMapAttributionHyperlink,
      iconUrl: '/public/images/outdoor-map-icon.jpg'
    },
    dark: {
      displayName: 'Dark',
      url: defraMapConfig.darkMapStyleUrl,
      attribution: osMasterMapAttributionHyperlink,
      iconUrl: '/public/images/dark-map-icon.jpg'
    },
    blackAndWhite: {
      displayName: 'Black and white',
      url: defraMapConfig.blackAndWhiteMasterMapStyleUrl,
      attribution: osMasterMapAttributionHyperlink,
      iconUrl: '/public/images/black-and-white-map-icon.jpg'
    }
  })

  const baseMapStyles = Object.entries(mapStyles)
    .map(([name, { url, attribution, displayName, iconUrl }]) => ({ name, url, attribution, displayName, iconUrl }))

  const digitisingMapStyles = Object.entries(mapStyles)
    .map(([name, { url, attribution, displayName, iconUrl }]) => ({ name, url, attribution, displayName, iconUrl }))

  return { mapStyles, baseMapStyles, digitisingMapStyles }
}

export { setUpBaseMaps }
