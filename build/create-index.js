const { readdirSync, writeFileSync } = require('fs')
const {
  basename,
  extname,
  join,
  normalize
} = require('path')
const { camelCase } = require('camel-case')

function createIndex (projectPath) {
  function getFileBaseName (fullName) {
    const ext = extname(fullName)
    return basename(fullName, ext)
  }

  function getAbsolute (relative) {
    return normalize(join(projectPath, relative))
  }

  const jsFiles = readdirSync(getAbsolute('lib'))
    .filter((s) => getFileBaseName(s).indexOf('_') !== 0 && s !== 'index.js')

  const varNames = jsFiles
    .map(getFileBaseName)
    .map((s) => s.length === 1 ? s.toUpperCase() : camelCase(s))

  const imports = jsFiles.map((item, i) => {
    const pathName = `./${getFileBaseName(item)}`
    const varName = varNames[i]
    return `export { default as ${varName} } from '${pathName}'`
  }).join('\n')

  writeFileSync(getAbsolute('lib/index.js'), imports)
}

createIndex(process.cwd())
