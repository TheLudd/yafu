module.exports = function (composeBinary) {
  return function () {
    const add = (x, y) => x + y
    const mulBy2 = (x) => x * 2

    it('should apply the binary function to the input and the unary to the result', function () {
      composeBinary(mulBy2, add, 10, 20).should.equal(60)
    })
  }
}
