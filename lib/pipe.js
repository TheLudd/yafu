module.exports = pipe

const curry = require('./curry')
const callWith = curry(_callWith)
const head = require('./head')
const flip = curry(_flip)
const tail = require('./tail')

function pipe (fnList, x) {
  return tail(fnList).reduce(flip(pipe), head(fnList).reduce(callWith, x))
}

function _callWith (x, f) {
  return f(x)
}

function _flip (f, a, b) {
  return f(b, a)
}
