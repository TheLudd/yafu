export default curry

/**
 * Curries a function according to the following rules:
 *
 * Given that `f` is a function that takes `n` arguments, if the curried `f` is called with:
 *   * **fewer than n agruments**: return a curried function that accepts the remaining arguments
 *   * **exactly n arguments**: the function to the arguments and return the result,
 *     if the result is a function, apply curry to it
 *   * **more than n arguments**: apply the function to the first n arguments,
 *     assume the result is a function, curry it and apply it to the remaining arguments. If the result
 *     of applying f to the first n arguments is nor a function, it is considered an error.
 *
 * @function curry
 * @arg f {function} The function to curry
 *
 */
function curry (f) {
  const length = f.length
  return length === 0 ? f : curryOfLength(length, f)
}

function curryOfLength (length, f) {
  const curried = function () {
    const args = arguments
    const diff = length - args.length
    if (args.length === 0) {
      return curried
    } else if (diff === 0) {
      let result = f.apply(null, args)
      return isFunction(result) ? curry(result) : result
    } else if (diff > 0) {
      return curryOfLength(diff, function () {
        const innerArgs = arguments
        const fullArgs = concat(args, innerArgs)
        return f.apply(null, fullArgs)
      })
    } else {
      const neededArgs = slice(0, length, args)
      const remainingArgs = slice(length, args.length, args)
      let result = f.apply(null, neededArgs)
      return curry(result).apply(null, remainingArgs)
    }
  }
  return curried
}

function slice (start, end, arrayLike) {
  let i
  const out = []
  for (i = start; i < end; ++i) {
    out[i - start] = arrayLike[i]
  }

  return out
}

function concat (a, b) {
  let i
  const out = []
  for (i = 0; i < a.length; ++i) {
    out[i] = a[i]
  }
  for (i = 0; i < b.length; ++i) {
    out[i + a.length] = b[i]
  }
  return out
}

function isFunction (v) {
  return typeof v === 'function'
}
