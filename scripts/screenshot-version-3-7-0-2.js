#!/usr/bin/env node

/**
 * Screenshot Helper for v3.7.0.2 Design History
 * 
 * Automates full-page screenshot capture for the v3.7.0.2 research round.
 * Takes screenshots of all pages in the "Changed pages in this version" list.
 * 
 * Prerequisites:
 *   - Prototype server running: npm run dev
 *   - Playwright installed
 * 
 * Usage:
 *   node scripts/screenshot-version-3-7-0-2.js [options]
 * 
 * Options:
 *   --base-url URL       Base URL of running prototype (default: http://localhost:3000)
 *   --headless BOOL      Run in headless mode (default: true)
 *   --width WIDTH        Browser viewport width (default: 1280)
 *   --help               Show this help message
 * 
 * Example:
 *   node scripts/screenshot-version-3-7-0-2.js
 *   node scripts/screenshot-version-3-7-0-2.js --base-url http://localhost:5000 --width 1024
 */

const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

// Configuration for this version
const VERSION = '3.7.0.2'
const VERSION_FOLDER = '3-7-0-2'

// Parse command line arguments
const args = process.argv.slice(2)
const options = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  headless: true,
  width: 1280
}

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--base-url' && args[i + 1]) {
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
Screenshot Helper for v${VERSION} Design History

Usage: node scripts/screenshot-version-${VERSION_FOLDER}.js [options]

Options:
  --base-url URL       Base URL of running prototype (default: http://localhost:3000)
  --headless BOOL      Run in headless mode (default: true)
  --width WIDTH        Browser viewport width (default: 1280)
  --help               Show this help message

Examples:
  node scripts/screenshot-version-${VERSION_FOLDER}.js
  node scripts/screenshot-version-${VERSION_FOLDER}.js --base-url http://localhost:5000
    `)
    process.exit(0)
  }
}

// Pages to screenshot (from versions.json)
const pages = [
  { name: "Start page", url: "/v3-7-0-2" },
  { name: "Upload boundary", url: "/v3-7-0-2/upload" },
  { name: "300 hectare error", url: "/v3-7-0-2/upload_error_hectare" },
  { name: "File format error", url: "/v3-7-0-2/upload_error_format" },
  { name: "File size error", url: "/v3-7-0-2/upload_error_size" },
  { name: "Boundary format error", url: "/v3-7-0-2/upload_error_geo" },
  { name: "Check your details", url: "/v3-7-0-2/summary-fz3" },
  { name: "Check your details (no research sign up)", url: "/v3-7-0-2/summary-fz3-no-check" },
  { name: "Confirmation page", url: "/v3-7-0-2/confirmation-fz3" },
  { name: "Confirmation email", url: "/v3-7-0-2/email-template" }
]

const outputDir = path.join(__dirname, `../app/views/design-history/${VERSION_FOLDER}/images`)

// Main function
(async () => {
  console.log(`\n📸 Capturing full-page screenshots for v${VERSION}...`)
  console.log(`📁 Output directory: ${outputDir}`)
  console.log(`🌐 Base URL: ${options.baseUrl}\n`)

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
    for (const pageItem of pages) {
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

      console.log(`  [${screenshotCount}/${pages.length}] ${pageItem.name}...`)
      console.log(`    URL: ${pageUrl}`)

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

        console.log(`    ✓ Saved as: ${filename}\n`)
      } catch (error) {
        console.error(`    ✗ Failed: ${error.message}\n`)
      }
    }

    await browser.close()

    console.log(`\n✓ Screenshot capture complete!\n`)
    console.log(`📋 Copy this into your design history post:\n`)
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
