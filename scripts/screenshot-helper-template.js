#!/usr/bin/env node

/**
 * Screenshot Helper for Design History
 * 
 * This script automates full-page screenshot capture for design history entries.
 * It reads page URLs from versions.json and takes full-page screenshots.
 * 
 * Usage: node scripts/screenshot-version-X-X-X.js [options]
 * 
 * Options:
 *   --version VERSION    Version number to screenshot (required)
 *   --base-url URL       Base URL of running prototype (default: http://localhost:3000)
 *   --headless BOOL      Run in headless mode (default: true)
 *   --width WIDTH        Browser viewport width (default: 1280)
 *   --help               Show this help message
 * 
 * Example:
 *   node scripts/screenshot-version-3-6-1.js --version 3.6.1 --base-url http://localhost:3000
 */

const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

// Parse command line arguments
const args = process.argv.slice(2)
const options = {
  version: null,
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  headless: true,
  width: 1280
}

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--version' && args[i + 1]) {
    options.version = args[i + 1]
    i++
  } else if (args[i] === '--base-url' && args[i + 1]) {
    options.baseUrl = args[i + 1]
    i++
  } else if (args[i] === '--headless' && args[i + 1]) {
    options.headless = args[i + 1] !== 'false'
    i++
  } else if (args[i] === '--width' && args[i + 1]) {
    options.width = parseInt(args[i + 1], 10)
    i++
  } else if (args[i] === '--help' || args[i] === '-h') {
    console.log(`
Screenshot Helper for Design History

Usage: node scripts/screenshot-version-X-X-X.js [options]

Options:
  --version VERSION    Version number to screenshot (required)
  --base-url URL       Base URL of running prototype (default: http://localhost:3000)
  --headless BOOL      Run in headless mode (default: true)
  --width WIDTH        Browser viewport width (default: 1280)
  --help               Show this help message

Example:
  node scripts/screenshot-version-3-6-1.js --version 3.6.1 --base-url http://localhost:3000
    `)
    process.exit(0)
  }
}

if (!options.version) {
  console.error('Error: --version is required')
  console.error('Usage: node scripts/screenshot-version-X-X-X.js --version X.X.X')
  process.exit(1)
}

// Convert version format (3.6.1 -> 3-6-1)
const versionFolder = options.version.replace(/\./g, '-')
const versionsFilePath = path.join(__dirname, '../app/views/versions.json')
const outputDir = path.join(__dirname, `../app/views/design-history/${versionFolder}/images`)

// Main function
(async () => {
  console.log(`\n📸 Capturing full-page screenshots for v${options.version}...`)
  console.log(`📁 Output directory: ${outputDir}\n`)

  // Read versions.json
  let versionsData
  try {
    const fileContent = fs.readFileSync(versionsFilePath, 'utf-8')
    versionsData = JSON.parse(fileContent)
  } catch (error) {
    console.error(`Error reading versions.json: ${error.message}`)
    process.exit(1)
  }

  // Find matching version
  const versionEntry = versionsData.versions.find(v => v.number === options.version)
  if (!versionEntry) {
    console.error(`Error: Version v${options.version} not found in versions.json`)
    process.exit(1)
  }

  if (!versionEntry.pages || versionEntry.pages.length === 0) {
    console.error(`Error: Version v${options.version} has no pages defined`)
    process.exit(1)
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Launch browser
  const browser = await chromium.launch({ headless: options.headless })
  const context = await browser.createBrowserContext()
  const page = await context.newPage()
  
  // Set viewport size
  await page.setViewportSize({ width: options.width, height: 1080 })

  let markdown = '\n<!-- Generated screenshots -->\n'
  let screenshotCount = 0
  const screenshots = []

  try {
    for (const pageItem of versionEntry.pages) {
      const pageUrl = new URL(pageItem.url, options.baseUrl).toString()
      screenshotCount++
      const screenshotNum = String(screenshotCount).padStart(2, '0')
      
      // Generate filename from page name (slugify)
      const slug = pageItem.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      const filename = `${screenshotNum}-${slug}.png`
      const filepath = path.join(outputDir, filename)

      console.log(`  [${screenshotCount}/${versionEntry.pages.length}] ${pageItem.name}...`)
      console.log(`    URL: ${pageUrl}`)
      console.log(`    Saving: ${filename}`)

      try {
        // Navigate to page
        await page.goto(pageUrl, { waitUntil: 'networkidle' })
        
        // Wait a moment for any animations to settle
        await page.waitForTimeout(500)

        // Take full-page screenshot
        await page.screenshot({
          path: filepath,
          fullPage: true
        })

        // Add to markdown snippet
        markdown += `\n<h2 class="govuk-heading-l">${pageItem.name}</h2>\n`
        markdown += `<p class="govuk-body"></p>\n`
        markdown += `<img src="images/${filename}" alt="Screenshot of ${pageItem.name}">\n`

        screenshots.push({
          num: screenshotNum,
          name: pageItem.name,
          filename: filename
        })

        console.log(`    ✓ Complete\n`)
      } catch (error) {
        console.error(`    ✗ Failed: ${error.message}\n`)
      }
    }

    await browser.close()

    console.log(`\n✓ Screenshots complete!`)
    console.log(`\n📋 Copy this into your design history post template:\n`)
    console.log('---')
    console.log(markdown)
    console.log('---\n')

    // Save markdown snippet to file
    const snippetFile = path.join(outputDir, '..', 'screenshot-snippet.html')
    fs.writeFileSync(snippetFile, markdown)
    console.log(`💾 Snippet saved to: ${snippetFile}\n`)

  } catch (error) {
    console.error(`Error during screenshot capture: ${error.message}`)
    await browser.close()
    process.exit(1)
  }
})()
