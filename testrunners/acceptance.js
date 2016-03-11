import runTests from './run-tests'

const bundle = require('../dist/yafu')
const minified = require('../dist/yafu.min')
import camelCase from 'camel-case'

function upperFirst (string) {
  return string[0].toUpperCase() + string.substring(1)
}

function getBundleFunction (bundle) {
  return function (name) {
    const camelCaseName = camelCase(name)
    return bundle[camelCaseName] || bundle[upperFirst(camelCaseName)]
  }
}

describe('yafu bundle', runTests(getBundleFunction(bundle)))
describe('yafu bundle minified', runTests(getBundleFunction(minified)))
