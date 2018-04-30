module.exports = function (difference) {
  return function () {
    it('should return empty list for empty input lists', () => {
      difference([], []).should.deep.equal([])
    })

    it('should return an empty list when there are no differences', () => {
      difference([1, 2], [1, 2, 1]).should.deep.equal([])
    })

    it('should return an array of unique values not contained in the second array', () => {
      const A = [1, 2, 3, 4, 5, 6]
      const B = [4, 5, 6, 7, 8]
      difference(A, B).should.deep.equal([1, 2, 3])
    })

    it('should handle duplicate values in the input lists', () => {
      const A = [1, 2, 3, 1, 2, 3, 4]
      const B = [2, 2, 3, 3]
      difference(A, B).should.deep.equal([1, 4])
    })
  }
}
