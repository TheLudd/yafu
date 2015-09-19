const tail = require('../lib/tail')

describe('tail', function () {

  it('should return a list with all elements except the initial', function () {
    tail([ 1, 2, 3 ]).should.deep.equal([ 2, 3 ])
  })

  it('should return an empty list for a list of length 1', function () {
    tail([ 1 ]).should.deep.equal([])
  })

  it('should return an empty list for a list of length 0', function () {
    tail([]).should.deep.equal([])
  })

})
