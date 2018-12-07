import I from '../lib/i'

module.exports = function (memoizeBy) {
  return function () {
    it('should call the function only once for the same input', () => {
      let callCount = 0
      const myFac = memoizeBy(I, (n) => {
        callCount++
        let res = 1
        for (let i = 1; i <= n; i++) {
          res *= i
        }
        return res
      })
      myFac(7).should.equal(5040)
      myFac(7).should.equal(5040)
      myFac(7).should.equal(5040)
      callCount.should.equal(1)
    })

    it('should handle functions with multiple parameters', () => {
      let callCount = 0
      const myKeyFn = (a, b) => a + '' + b
      const myPow = memoizeBy(myKeyFn, (a, b) => {
        callCount++
        let res = 1
        for (let i = 0; i < b; i++) {
          res *= a
        }
        return res
      })
      myPow(2, 10).should.equal(1024)
      myPow(2, 10).should.equal(1024)
      callCount.should.equal(1)
    })
  }
}
