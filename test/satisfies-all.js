module.exports = function (satisfiesAll) {
  return function () {
    var isNumber = (n) => typeof n === 'number'
    var isOdd = (n) => n % 2 === 1

    it('returns true for an empty list of predicates', function () {
      satisfiesAll([], 'foo').should.equal(true)
    })

    it('returns true for a list of predicates that all return true for the value', function () {
      satisfiesAll([ isNumber, isOdd ], 3).should.equal(true)
    })

    it('returns false for a list of predicates where at leas one return false for the value', function () {
      satisfiesAll([ isNumber, isOdd ], 4).should.equal(false)
    })
  }
}
