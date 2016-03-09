module.exports = function (I) {
  return function () {
    it('should return the argument it receives', function () {
      const someValue = {}
      I(someValue).should.equal(someValue)
    })
  }
}
