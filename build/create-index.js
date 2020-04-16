const { readdirSync, writeFileSync } = require('fs')
const {
  basename,
  extname,
  join,
  normalize
} = require('path')
const { camelCase } = require('camel-case')
const mkdirp = require('mkdirp')

function createIndex (projectPath) {
  function getFileBaseName (fullName) {
    const ext = extname(fullName)
    return basename(fullName, ext)
  }

  function getAbsolute (relative) {
    return normalize(join(projectPath, relative))
  }

  const jsFiles = readdirSync(getAbsolute('lib'))
    .filter((s) => getFileBaseName(s).indexOf('_') !== 0)

  const varNames = jsFiles
    .map(getFileBaseName)
    .map((s) => s.length === 1 ? s.toUpperCase() : camelCase(s))

  const imports = jsFiles.map((item, i) => {
    const pathName = `./${getFileBaseName(item)}`
    const varName = varNames[i]
    return `import ${varName} from './lib/${pathName}'`
  }).join('\n')

  const exports = varNames.map((varName) => {
    return ` ${varName},`
  }).join('\n')

  const content = [
    imports,
    '',
    'export {',
    exports,
    '}'
  ].join('\n')
  mkdirp.sync('dist')
  writeFileSync(getAbsolute('index.js'), content)
}

createIndex(process.cwd())
