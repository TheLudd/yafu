module.exports = function (clamp) {
  return function () {
    it('clamps to the lower bound', function () {
      clamp(1, 100, -100).should.equal(1)
    })

    it('clamps to the upper bound', function () {
      clamp(1, 100, 200).should.equal(100)
    })

    it('does not clamp when in range', function () {
      clamp(100, 200, 150).should.equal(150)
    })
  }
}
