module.exports = function (propEq) {
  return function () {
    const obj = {foo: 'bar'}

    it('returns true for matching value', () => {
      propEq('foo', 'bar', obj).should.equal(true)
    })

    it('returns false for non matching value', () => {
      propEq('foo', 'baz', obj).should.equal(false)
    })

    it('returns false for non matching prop', () => {
      propEq('unknown', 'bar', obj).should.equal(false)
    })
  }
}
