import curry from './curry'

export default curry(_isEmpty)

/**
 * Returns true if the list is empty.
 *
 * @arg list {Array} The list to check if it is empty or not.
 */
function _isEmpty (list) {
  return list.length === 0
}
