import curry from './curry'

export default curry(_uniqBy)

/**
 * Returns a new list without duplicate elements. Uniqueness is determined by applying
 * the supplied function to each list element. If the supplied function produces
 * identical values for multiple list elements only the first element is kept.
 * The order of result values is determined by the order they occur in the input list.
 * {@link http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero SameValueZero} is used for equality comparisons
 *
 * @function uniqBy
 * @arg {Function} fn A function to produce the value used to determine uniqueness
 * @arg {Array} list The list to inspect
 * @return {Array} A new list of unique elements
 */
function _uniqBy (fn, list) {
  const set = new Set()
  const out = []
  for (let i = 0; i < list.length; i++) {
    const listItem = list[i]
    const val = fn(listItem)
    if (!set.has(val)) {
      out.push(listItem)
      set.add(val)
    }
  }
  return out
}
