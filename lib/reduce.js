import curry from './curry'

export default curry(_reduce)

/**
 * Reduces a list of values to a single value by passing each value to
 * a binary accumulator function along with the result of the previous iteration.
 *
 * @arg f {function} A binary accumulator function.
 * @arg x {any} The initial value, will be passed to the accumulator in the first iteration.
 * @arg list {array} The array to reduce.
 *
 */
function _reduce (f, x, list) {
  var i
  var acc = x
  for (i = 0; i < list.length; ++i) {
    acc = f(acc, list[i])
  }
  return acc
}
