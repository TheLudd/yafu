import _apply from './_apply'
import curry from './curry'
export default curry(_composeN)

/**
 * Composes a function of length n with a unary functon. The unary function will be
 * applied to the result of the length n function.
 *
 * @arg n {Function} The length of the second function
 * @arg f {Function} A unary function
 * @arg g {Function} A function of length n
 * @arg args {Any} n number of arguments
 */
function _composeN (n, f, g) {
  function composed (...args) {
    return f(_apply(g, args))
  }
  Object.defineProperty(composed, 'length', { value: n })
  return composed
}

