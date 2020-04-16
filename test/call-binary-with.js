module.exports = function (callBinaryWith) {
  return function () {
    const subtract = (a, b) => a - b

    it('should call a binary function with the provided arguments', () => {
      const result = callBinaryWith(5, 7, subtract)
      result.should.equal(-2)
    })
  }
}
