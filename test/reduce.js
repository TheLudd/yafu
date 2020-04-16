module.exports = function (reduce) {
  return function () {
    const add = (a, b) => a + b

    it('returns the initial argument for an empty list', function () {
      reduce(null, 'X', []).should.equal('X')
    })

    it('performs the reduce operation on the array', function () {
      reduce(add, 0, [1, 2, 3]).should.equal(6)
    })
  }
}
