import curry from './curry'
import _arrayToSet from './_arrayToSet'

export default curry(_difference)

/**
 * Creates a new list of unique values that are included in the first list but not in the second list
 *
 * @function difference
 * @arg {Array} list1  The first list
 * @arg {Array} list2  The second list
 * @return {Array} A list of unique elements in list1 that are not in list2
 *
 */
function _difference (list1, list2) {
  const lookupSet = _arrayToSet(list2)
  const out = []
  for (let i = 0; i < list1.length; i++) {
    const item = list1[i]
    if (!lookupSet.has(item)) {
      out.push(item)
      lookupSet.add(item)
    }
  }

  return out
}
