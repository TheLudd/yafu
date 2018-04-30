module.exports = function (union) {
  return function () {
    it('should return an empty list when both input lists are empty', () => {
      union([], []).should.deep.equal([])
    })

    it('should return a list of unique values', () => {
      union([2], [1, 2]).should.deep.equal([2, 1])
    })

    it('should handle duplicate elements within the same list', () => {
      union([1, 2], [3, 4, 3]).should.deep.equal([1, 2, 3, 4])
    })
  }
}
