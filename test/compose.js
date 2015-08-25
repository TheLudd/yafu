var compose = require('../lib/compose')

describe('compose', function () {

  var inc = n => n + 1
  var dbl = n => n * 2

  it('composes right to left', function () {
    compose(inc, dbl, 20).should.equal(41)
    compose(dbl, inc, 20).should.equal(42)
  })

})
