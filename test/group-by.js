import I from '../lib/i'

module.exports = function (groupBy) {
  return function () {
    it('returns empty object for empty list', () => {
      groupBy(I, []).should.deep.equal({})
    })

    it('returns an object with keys and values determined by the grouping function', () => {
      const books = [
        { author: 'Bob', title: 'Foo' },
        { author: 'Alice', title: 'Bar' },
        { author: 'Bob', title: 'Baz' },
        { author: 'Carol', title: 'Qux' },
        { author: 'Alice', title: 'Quux' }
      ]
      const byAuthor = (book) => book.author
      groupBy(byAuthor, books).should.deep.equal({
        Bob: [ { author: 'Bob', title: 'Foo' }, { author: 'Bob', title: 'Baz' } ],
        Alice: [ { author: 'Alice', title: 'Bar' }, { author: 'Alice', title: 'Quux' } ],
        Carol: [ { author: 'Carol', title: 'Qux' } ]
      })
    })
  }
}
