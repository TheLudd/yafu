module.exports = function (map) {
  return function () {
    it('should return an empty array for empty input', function () {
      map(null, []).should.deep.equal([])
    })

    it('should apply the mapping function to all values in the array', function () {
      const inc = (x) => x + 1
      map(inc, [1, 2, 3]).should.deep.equal([2, 3, 4])
    })
  }
}
