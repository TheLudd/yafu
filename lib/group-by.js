import curry from './curry'

export default curry(_groupBy)

/**
 * Returns a new object that contains all elements of the list split into
 * separate sub list. The object keys and sub-lists are determined by calling
 * the supplied grouping function on each element in the list and grouping the
 * results based on the value returned. The order of the values in the sub-list
 * are determined by the order they occur in the list.
 *
 * @function groupBy
 * @arg {Function} fn A function
 * @arg {Array} list The list to values to group
 * @return {Object} An object with keys mapped to lists of elements.
 */
function _groupBy (fn, list) {
  const out = {}
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    const key = fn(item)
    const group = out[key]
    if (group !== undefined) {
      group.push(item)
    } else {
      out[key] = [ item ]
    }
  }
  return out
}
