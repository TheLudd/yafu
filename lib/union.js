import _concat from './_concat'
import composeBinary from './compose-binary'
import uniq from './uniq'

/**
 * Returns a list of unique values composed of elements from each input list using
 * {@link http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero SameValueZero} for equality comparisons.
 *
 * @function union
 * @arg {Array} list1 The first list
 * @arg {Array} list2 The second list
 * @return {Array} A new list of unique elements
 *
 */
const union = composeBinary(uniq, _concat)

export default union
