const tail = require('../lib/tail')
const Maybe = require('../lib/maybe')

describe('tail', function () {

  it('should return a Maybe of the list with all elements except the initial', function () {
    Maybe.from([ 2, 3 ]).should.deep.equal(tail([ 1, 2, 3 ]))
  })

  it('should return a Maybe of an empty list for a list of length 1', function () {
    Maybe.from([]).should.deep.equal(tail([ 1 ]))
  })

  it('should return a Nothing for a list of length 0', function () {
    Maybe.from(null).equals(tail([])).should.equal(true)
  })

})
