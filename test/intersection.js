module.exports = function (intersection) {
  return function () {
    it('should return empty list for empty input list', () => {
      intersection([], []).should.deep.equal([])
    })

    it('should return a list of unique values common to both list', () => {
      const A = [1, 2, 3, 4, 5, 6]
      const B = [4, 5, 6, 7, 8]
      intersection(A, B).should.deep.equal([4, 5, 6])
    })

    it('should handle duplicate values in input lists', () => {
      const A = [1, 2, 3, 1, 2, 3]
      const B = [2, 2, 3, 3]
      intersection(A, B).should.deep.equal([2, 3])
    })

    it('should handle no common values', () => {
      intersection([1, 2], [3]).should.deep.equal([])
    })
  }
}
