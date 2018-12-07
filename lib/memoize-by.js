import curry from './curry'
import _apply from './_apply'

export default curry(_memoizeBy)

/**
 * Creates a function that caches the result of the supplied function fn based
 * on the arguments provided. The cache key that is used for storing the result
 * is determined by the key generation function.
 *
 * @function memoizeBy
 * @arg {Function} generateKeyFn The function to generate the cache key based on the arguments to fn
 * @arg {Function} fn The function to memoize
 * @return {Function} A memoized version of fn
 *
 */
function _memoizeBy (keyFn, fn) {
  const cache = {}
  return function (...args) {
    const key = _apply(keyFn, args)
    const cacheValue = cache[key]
    if (cacheValue !== undefined) {
      return cacheValue
    } else {
      cache[key] = _apply(fn, args)
      return cache[key]
    }
  }
}
