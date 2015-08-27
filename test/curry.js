var curry = require('../lib/curry')

describe('curry', function () {

  var add2 = curry((a, b) => a + b)
  var add3 = curry((a, b, c) => a + b + c)
  var isFunction = v => (typeof v).should.equal('function')

  var buildGreeting = curry(function (greeting) {
    return function (firstName, lastName) {
      return [ greeting, firstName, lastName ].join(' ') + '!'
    }
  })

  describe('m = 0', function () {

    it('should return the input function', function () {
      add2()(1)(2).should.equal(3)
    })

  })

  describe('m = n', function () {

    it('should call the function', function () {
      add2(1, 2).should.equal(3)
      add3(1, 2, 3).should.equal(6)
    })

  })

  describe('m < n', function () {

    it('should return a function', function () {
      isFunction(add2(1))
      isFunction(add3(1))
      isFunction(add3(1, 2))
    })

    it('should return a function that accepts the remaining arguments', function () {
      add2(1)(2).should.equal(3)
    })

    it('n = 3', function () {
      add3(1, 2)(3).should.equal(6)
      add3(1)(2, 3).should.equal(6)
      add3(1)(2)(3).should.equal(6)
    })

  })

  describe('m > n', function () {

    describe('when result is a function', function () {

      it('should curry the result and apply the remaining arguments', function () {
        buildGreeting('Hello', 'John', 'Doe').should.equal('Hello John Doe!')
      })

    })

  })

  it('should curry the result when it is a function', function () {
    buildGreeting('Hello')('John')('Doe').should.equal('Hello John Doe!')
  })

})
