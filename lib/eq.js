import curry from './curry'

/**
 * Check for equality with using the === binary operator.
 */
function _eq (a, b) {
  return a === b
}

export default curry(_eq)
