module.exports = function (pipe) {

  return function () {

    const toUpper = (s) => s.toUpperCase()

    it('should return the input for an empty list', function () {
      pipe([], 'foo').should.equal('foo')
    })

    it('should return the result of the first function if only one is provided', function () {
      pipe([ toUpper ], 'foo').should.equal('FOO')
    })

    it('pipe the result of the first function throug the list of functions', function () {
      const getName = (o) => o.name
      const first = (a) => a[0]
      const userArray = [ { name: 'stiller' } ]
      pipe([ first, getName, toUpper ], userArray).should.equal('STILLER')
    })

  }

}
