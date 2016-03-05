export default curry

/**
 * Curries a function according to the following rules:
 *
 * Given that `f` is a function that takes `n` arguments, if the curried `f` is called with:
 *   * **fewer than n agruments**: return a curried function that accepts the remaining arguments
 *   * **exactly n arguments**: apply the function to the arguments and return the result,
 *     if the result is a function, apply curry to it
 *   * **more than n arguments**: apply the function to the first n arguments,
 *     assume the result is a function, curry it and apply it to the remaining arguments. If the result
 *     of applying f to the first n arguments is not a function, it is considered an error.
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
      let result = callWithArgs(f, args)
      return isFunction(result) ? curry(result) : result
    } else if (diff > 0) {
      return curryOfLength(diff, function () {
        const innerArgs = arguments
        const fullArgs = concat(args, innerArgs)
        return callWithArgs(f, fullArgs)
      })
    } else {
      const neededArgs = slice(0, length, args)
      const remainingArgs = slice(length, args.length, args)
      const result = callWithArgs(f, neededArgs)
      return callWithArgs(curry(result), remainingArgs)
    }
  }
  return curried
}

function callWithArgs (f, a) {
  switch (a.length) {
    case 1: return f(a[0])
    case 2: return f(a[0], a[1])
    case 3: return f(a[0], a[1], a[2])
    case 4: return f(a[0], a[1], a[2], a[3])
    case 5: return f(a[0], a[1], a[2], a[3], a[4])
    case 6: return f(a[0], a[1], a[2], a[3], a[4], a[5])
    case 7: return f(a[0], a[1], a[2], a[3], a[4], a[5], a[6])
    case 8: return f(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7])
    case 9: return f(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8])
    case 10: return f(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9])
  }
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
