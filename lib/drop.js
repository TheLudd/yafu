import curry from './curry'

export default curry(_drop)

/**
 * Remove the first n elements from a list.
 *
 * @arg n {Number} The number of elements to remove.
 * @arg list {Array} The list to remove the elements from.
 */
function _drop (n, list) {
  return list.slice(n)
}
