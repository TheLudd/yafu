const head = require('../lib/head')

describe('head', function () {

  it('should return the first element of a list', function () {
    head([ 1, 2, 3 ]).should.equal(1)
  })

  it('should return the only element of a list with length 1', function () {
    head([ 1 ]).should.equal(1)
  })

})
