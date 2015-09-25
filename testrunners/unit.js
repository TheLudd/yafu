import runTests from './run-tests'

function getFunction (name) {
  var filePath = '../lib/' + name
  return require(filePath)
}

describe('unary', runTests(getFunction))

