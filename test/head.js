const head = require('../lib/head')
const Maybe = require('../lib/maybe')

describe('head', function () {

  it('should return a maybe of the first element of a list', function () {
    Maybe.of(1).equals(head([ 1, 2, 3 ])).should.equal(true)
    Maybe.of(1).equals(head([ 1 ])).should.equal(true)
  })

  it('should return a maybe of nothing if the list is empty', function () {
    Maybe.from(null).equals(head([])).should.equal(true)
  })

})
