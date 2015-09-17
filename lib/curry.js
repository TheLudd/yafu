/**
 * Curries a function according to the following rules:
 *
 * Given that `f` is a function that takes `n` arguments, if the curried `f` is called with:
 *   * **fewer than n agruments**: return a function that accepts the remaining arguments
 *   * **exactly n arguments**: call the function and return the result,
 *     if the result is a function, apply curry to it
 *   * **more than n arguments**: call the function with the first n arguments,
 *     assume the result is a function, curry it and call it with the remaining arguments
 *
 * @function curry
 * @arg f {function} The function to curry
 *
 */
module.exports = curry

function curry (f) {
  var length = f.length
  return length === 0 ? f : curryOfLength(length, f)
}

function curryOfLength (length, f) {
  return function () {
    var args = arguments
    var result
    var diff = length - args.length
    if (diff === 0) {
      result = f.apply(null, args)
      return isFunction(result) ? curry(result) : result
    } else if (diff > 0) {
      return curryOfLength(diff, function () {
        var innerArgs = arguments
        var fullArgs = concat(args, innerArgs)
        return f.apply(null, fullArgs)
      })
    } else {
      var neededArgs = slice(0, length, args)
      var remainingArgs = slice(length, args.length, args)
      result = f.apply(null, neededArgs)
      return curry(result).apply(null, remainingArgs)
    }
  }
}

function slice (start, end, arrayLike) {
  var i
  var out = []
  for (i = start; i < end; ++i) {
    out[i - start] = arrayLike[i]
  }

  return out
}

function concat (a, b) {
  var i
  var out = []
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
