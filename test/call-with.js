module.exports = function (callWith) {
  return function () {
    const inc = (n) => n + 1

    it('calls the function with the supplied argument', function () {
      callWith(1, inc).should.equal(2)
    })
  }
}
