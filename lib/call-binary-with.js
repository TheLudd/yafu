import curry from './curry'

/**
 * Applies a binary function to the supplied arguments.
 *
 * @function callBinaryWith
 * @arg x {any} The first agument to the binary function
 * @arg y {any} The second agument to the binary function
 * @arg f {function} A unary function
 */
function _callBinaryWith (x, y, f) {
  return f(x, y)
}

export default curry(_callBinaryWith)
