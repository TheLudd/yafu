import runTests from './run-tests'

const bundle = require('../dist/unary')
const minified = require('../dist/unary.min')
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

describe('unary bundle', runTests(getBundleFunction(bundle)))
describe('unary bundle minified', runTests(getBundleFunction(minified)))
