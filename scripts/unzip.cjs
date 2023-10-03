const fs = require('fs').promises
const path = require('path')
const extract = require('extract-zip')

const config = require('../config.json')
const rootDir = process.cwd()

const sourceDirectory = path.join(rootDir, config.unzipPath)
const destinationDirectory = path.join(rootDir, config.path)

async function extractZipFile(zipFilePath, extractToPath) {
    try {
        await extract(zipFilePath, { dir: extractToPath })
        console.log(`Successfully extracted ${zipFilePath} to ${extractToPath}`)
    } catch (error) {
        console.error(`Failed to extract ${zipFilePath}: ${error.message}`)
    }
}

async function traverseAndExtract(directory) {
    const files = await fs.readdir(directory)

    for (const file of files) {
        const filePath = path.join(directory, file)

        if (path.extname(file) !== '.zip') continue

        await extractZipFile(filePath, destinationDirectory)
        fs.rm(filePath)
    }
}

traverseAndExtract(sourceDirectory).catch(err => {
    console.error('An error occurred:', err)
})
