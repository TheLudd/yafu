import runTests from './run-tests'
import { camelCase } from 'camel-case'

const bundle = require('../dist/umd/yafu')
const minified = require('../dist/umd/yafu.min')

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
