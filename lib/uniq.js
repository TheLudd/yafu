import I from './i'
import uniqBy from './uniq-by'

/**
 * Returns a new list without duplicate elements.
 * {@link http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero SameValueZero} is used for equality comparisons
 *
 * @function uniq
 * @arg {Array} list The list to inspect
 * @return {Array} A new list of unique elements
 */
const uniq = uniqBy(I)

export default uniq
