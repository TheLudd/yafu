import curry from './curry'

export default curry(_flip)

/**
 * Calls a function after flippng the order of the first two arguments
 *
 * @arg f {function} The function to call.
 * @arg x {any} The second argument to pass to the function.
 * @arg y {any} The first argument to pass to the function.
 *
 */
function _flip (f, x, y) {
  return f(y, x)
}
