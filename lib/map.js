import curry from './curry'
export default curry(_map)

/**
 * Applies a function to every element in a list and returns a list with the results.
 *
 * @arg f {Function} The function to apply to each value in the list.
 * @arg list {array} The list of values.
 */
function _map (f, list) {
  const out = []
  let i
  for (i = 0; i < list.length; ++i) {
    out.push(f(list[i]))
  }
  return out
}
