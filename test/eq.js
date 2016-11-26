module.exports = function (eq) {
  return function () {
    it('returns true for two equal values', () => {
      eq(1, 1).should.equal(true)
      eq('foo', 'foo').should.equal(true)
      eq(0, 0).should.equal(true)
    })

    it('should return false for two non equal values', () => {
      eq(1, 2).should.equal(false)
      eq('foo', 'Foo').should.equal(false)
      eq(0, '0').should.equal(false)
      eq([], []).should.equal(false)
    })
  }
}

