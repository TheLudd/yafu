module.exports = function (findIndex) {
  return function () {
    const isEven = (x) => x % 2 === 0
    const findEven = findIndex(isEven)

    it('should return the index of the first element matching the criteia', function () {
      findEven([ 1, 3, 4, 5, 6 ]).should.equal(2)
      findEven([ 10 ]).should.equal(0)
      findEven([ 1, 3, 5, 1, 7, 9, 12 ]).should.equal(6)
    })

    it('should return -1 if no element matches the predicate', function () {
      findEven([]).should.equal(-1)
      findEven([ 1, 3, 5, 7 ]).should.equal(-1)
    })
  }
}
