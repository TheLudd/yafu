import I from '../lib/i'

module.exports = function (uniqBy) {
  return function () {
    it('returns empty list for empty input', () => {
      uniqBy(I, []).should.deep.equal([])
    })

    it('returns a list of unique values based on predicate', () => {
      const pred = (o) => o.foo
      const input = [{ foo: 1 }, { foo: 2 }, { foo: 2 }, { foo: 3 }]
      const expected = [{ foo: 1 }, { foo: 2 }, { foo: 3 }]
      uniqBy(pred, input).should.deep.equal(expected)
    })

    it('keeps left most value for duplicate values', () => {
      uniqBy(I, [2, 3, 2, 2, 4, 5, 6, 5]).should.deep.equal([2, 3, 4, 5, 6])
    })
  }
}
