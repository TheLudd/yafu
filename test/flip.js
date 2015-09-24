module.exports = function (flip) {

  return function () {
    const strConcat = (a, b) => a + b

    it('flips the arguments to the passed in function', function () {
      flip(strConcat, 'foo', 'bar').should.equal('barfoo')
    })

  }
}
