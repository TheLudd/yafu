import curry from './curry'
export default curry(_modArgs)

/**
 * Call a binary function after the arguments have been modified
 * by separate transform functions.
 *
 * @function modArgs
 * @arg f {function} A binary function
 * @arg g {function} Transform function for the first argument
 * @arg h {function} Transform function for the second argument
 * @arg x {any} The first agument to the binary function
 * @arg y {any} The second agument to the binary function
 */
function _modArgs (f, g, h, x, y) {
  return f(g(x), h(y))
}
