module.exports = function (uniq) {
  return function () {
    it('returns empty list for empty input', () => {
      uniq([]).should.deep.equal([])
    })

    it('return a list of unique values', () => {
      uniq([1, 2, 3, 2, 1, 4]).should.deep.equal([1, 2, 3, 4])
    })

    it('keeps left most value for duplicate values', () => {
      uniq([2, 3, 2, 2, 4, 5, 6, 5]).should.deep.equal([2, 3, 4, 5, 6])
    })
  }
}
