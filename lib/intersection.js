import curry from './curry'
import _arrayToSet from './_arrayToSet'
import _setToArray from './_setToArray'

export default curry(_intersection)

/**
 * Creates a new list of unique elements that are common to both lists using {@link http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero SameValueZero}
 * for equality comparisons.
 *
 * @function intersection
 * @arg {Array} list1  The first list
 * @arg {Array} list2  The second list
 * @return {Array} The list of elements common to both list
 *
 */
function _intersection (list1, list2) {
  let listToIterate
  let lookupSet
  if (list1.length >= list2.length) {
    listToIterate = list2
    lookupSet = _arrayToSet(list1)
  } else {
    listToIterate = list1
    lookupSet = _arrayToSet(list2)
  }

  const out = new Set()
  for (let i = 0; i < listToIterate.length; i++) {
    const item = listToIterate[i]
    if (lookupSet.has(item)) {
      out.add(item)
    }
  }

  return _setToArray(out)
}
