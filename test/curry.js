module.exports = function (curry) {
  return function () {
    const add = (a, b) => a + b
    const add2 = curry(add)
    const add3 = curry((a, b, c) => a + b + c)

    const buildGreeting = curry(function (greeting) {
      return function (firstName, lastName) {
        return [ greeting, firstName, lastName ].join(' ') + '!'
      }
    })

    it('should return the input function if given no arguments', function () {
      add2().should.equal(add2())
      add2.should.equal(add2())
    })

    it('should retain the functions name', () => {
      add2.name.should.equal('add (curried)')
      add2(1).name.should.equal('add (curried)')
    })

    it('should give anonymous functions the name anonymous', () => {
      curry((x) => x).name.should.equal('anonymous (curried)')
    })

    it('should call the function if given the correct number of arguments', function () {
      add2(1, 2).should.equal(3)
      add3(1, 2, 3).should.equal(6)
    })

    it('should return a function that accepts the remaining arguments if given too few arguments', function () {
      add2(1)(2).should.equal(3)
      add3(1, 2)(3).should.equal(6)
      add3(1)(2, 3).should.equal(6)
      add3(1)(2)(3).should.equal(6)
    })

    it('should curry the result and apply the remaining arguments when given too many arguments', function () {
      buildGreeting('Hello', 'John', 'Doe').should.equal('Hello John Doe!')
    })

    it('should curry the result when it is a function', function () {
      buildGreeting('Hello')('John')('Doe').should.equal('Hello John Doe!')
    })

    it('shoud be able to handle functions with many arguments', function () {
      var join10 = curry(function (a, b, c, d, e, f, g, h, i, j) {
        return [ a, b, c, d, e, f, g, h, i, j ].join(', ')
      })
      join10(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).should.equal(
        '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'
      )
    })

    it('should preserve the functions length', () => {
      add2.length.should.equal(2)
      add2(1).length.should.equal(1)
      add3(1, 2).length.should.equal(1)
      add3(2).length.should.equal(2)
    })
  }
}
