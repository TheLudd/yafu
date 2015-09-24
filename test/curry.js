import curry from '../lib/curry'

describe('curry', function () {

  const add2 = curry((a, b) => a + b)
  const add3 = curry((a, b, c) => a + b + c)

  const buildGreeting = curry(function (greeting) {
    return function (firstName, lastName) {
      return [ greeting, firstName, lastName ].join(' ') + '!'
    }
  })

  it('should return the input function if given no arguments', function () {
    add2()(1, 2).should.equal(3)
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

})
