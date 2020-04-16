module.exports = function (drop) {
  return function () {
    it('should remove the first n elements from a list', function () {
      drop(1, [1, 2, 3]).should.deep.equal([2, 3])
      drop(2, [1, 2, 3]).should.deep.equal([3])
      drop(3, [1, 2, 3]).should.deep.equal([])
    })

    it('returns an empty list for n larger than the amount of elements in the list', function () {
      drop(4, [1, 2, 3]).should.deep.equal([])
    })
  }
}
