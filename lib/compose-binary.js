import curry from './curry'
export default curry(_composeBinary)

/**
 * Composes a binary function with a unary functon. The unary function will be
 * applied to the result of the binary function.
 *
 * @arg f {Function} A unary function
 * @arg g {Function} A binary function
 * @arg x {Any} The first value to pass to the binary function
 * @arg y {Any} The second value to pass to the binary function
 */
function _composeBinary (f, g, x, y) {
  return f(g(x, y))
}
