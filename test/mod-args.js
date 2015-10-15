module.exports = function (modArgs) {

  return function () {

    const concat = (a, b) => a + b
    const addFoo = (a) => a + 'foo'
    const addBar = (a) => a + 'bar'

    it('should modify the aruments before calling the binary function', function () {
      modArgs(concat, addFoo, addBar, 'first', 'second').should.equal('firstfoosecondbar')
    })

  }

}
