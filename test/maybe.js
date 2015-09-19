const Maybe = require('../lib/maybe')

describe('Maybe', function () {

  describe('#equals', function () {

    it('returns true if the contained elements are equal', function () {
      Maybe.from(1).equals(Maybe.from(1)).should.equal(true)
      Maybe.from(1).equals(Maybe.from(2)).should.equal(false)
    })

    it('returns true for two instances of nothing', function () {
      Maybe.from(null).equals(Maybe.from(undefined)).should.equal(true)
    })

    it('returns false when a Just is compared to a Nothing', function () {
      Maybe.from(null).equals(Maybe.of(null)).should.equal(false)
    })

  })

  describe('#map', function () {

    const inc = (n) => n + 1

    it('returns a new instance by applying the function to its value', function () {
      const m = Maybe.from(10)
      const res = m.map(inc)
      res.should.not.equal(m)
      res.equals(Maybe.from(11)).should.equal(true)
    })

    it('returns nothing if it is an instance of nothing', function () {
      const m = Maybe.from(null)
      const res = m.map(inc)
      res.equals(Maybe.from(null)).should.equal(true)
    })

  })

  describe('#reduce', function () {

    it('should apply the acc function to the default value and the wrapped value', function () {
      const m = Maybe.from(2)
      const add = (a, b) => a + b
      m.reduce(add, 10).should.equal(12)
    })

    it('should return the default value if it is a nothing', function () {
      const m = Maybe.from(null)
      m.reduce(null, 4).should.equal(4)
    })

  })

})
