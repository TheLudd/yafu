module.exports = function (all) {

  return function () {

    var getFalse = () => false
    var isNumber = (n) => typeof n === 'number'

    it('returns true for an empty array', function () {
      all(getFalse, []).should.equal(true)
    })

    it('returns true if all elements pass the predicate test', function () {
      all(isNumber, [ 1, 2, 3 ]).should.equal(true)
    })

    it('returns false if any element fails the predicate test', function () {
      all(isNumber, [ 1, '2', 3 ]).should.equal(false)
    })

  }

}
