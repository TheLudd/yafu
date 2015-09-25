import curry from './curry'

/**
 * Compose two functions passing the result from the second one to the first one.
 *
 * @function compose
 * @arg f {function} The function that will apply the return value of `g`
 * @arg g {function} The function that will be apply `x` and pass the result to `f`
 * @arg x {any} The value to pass to `g`
 */
export default curry(_compose)

function _compose (f, g, x) {
  return f(g(x))
}
