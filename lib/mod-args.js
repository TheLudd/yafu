import curry from './curry'
export default curry(_modArgs)

/**
 * Call a binary function after the arguments have been modified
 * by separate transform functions.
 *
 */
function _modArgs (f, g, h, x, y) {
  return f(g(x), h(y))
}
