import curry from './curry'
import drop from './drop'
import isEmpty from './is-empty'

export default curry(_satisfiesAll)

/**
 * Determines if a value statisfies a list of predicates. Returns `true` unless any predicate
 * function returns `false` when applied to the value.
 *
 * @arg predicates {[Function]} The list of predicate functions to apply to the value
 * @arg val {any} The value to check
 */
function _satisfiesAll (predicates, val) {
  return isEmpty(predicates) ||
    (predicates[0](val) === true && _satisfiesAll(drop(1, predicates), val))
}
