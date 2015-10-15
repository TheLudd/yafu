import runTests from './run-tests'

const bundle = require('../dist/unary')
const minified = require('../dist/unary.min')
import camelCase from 'camel-case'

function getBundlefunction (name) {
  return bundle[camelCase(name)]
}

function getMinifiedFunction (name) {
  return minified[camelCase(name)]
}

describe('unary bundle', runTests(getBundlefunction))
describe('unary bundle minified', runTests(getMinifiedFunction))
