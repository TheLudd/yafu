import curry from './curry'

export default curry(_callWith)

/**
 * Applies a unary function to the supplied argument.
 *
 * @function callWith
 * @arg x {any} The agument to the unary function
 * @arg f {function} A unary function
 */
function _callWith (x, f) {
  return f(x)
}
