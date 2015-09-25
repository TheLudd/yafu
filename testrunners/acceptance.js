import runTests from './run-tests'

const bundle = require('../dist/unary')
const minified = require('../dist/unary.min')

function getBundlefunction (name) {
  return bundle[name]
}

function getMinifiedFunction (name) {
  return minified[name]
}

describe('unary bundle', runTests(getBundlefunction))
describe('unary bundle minified', runTests(getMinifiedFunction))
