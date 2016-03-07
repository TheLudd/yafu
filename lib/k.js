import curry from './curry'

export default curry(_K)

/**
 * A binary function that returns its' first argument.
 *
 * @arg x {any} The first value, will be returned.
 * @arg y {any} The second value, will be ignored.
 *
 */
function _K (x, y) {
  return x
}
