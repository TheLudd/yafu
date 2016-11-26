module.exports = function (neq) {
  return function () {
    it('returns false for two equal values', () => {
      neq(1, 1).should.equal(false)
      neq('foo', 'foo').should.equal(false)
      neq(0, 0).should.equal(false)
    })

    it('should return true for two non nequal values', () => {
      neq(1, 2).should.equal(true)
      neq('foo', 'Foo').should.equal(true)
      neq(0, '0').should.equal(true)
      neq([], []).should.equal(true)
    })
  }
}
