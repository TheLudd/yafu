module.exports = function (K) {

  return function () {

    it('should return the first of the two arguments', function () {
      const obj1 = {}
      const obj2 = []
      K(obj1, obj2).should.equal(obj1)
    })

  }

}
