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
        var fullArgs = toArray(args).concat(toArray(innerArgs))
        return f.apply(null, fullArgs)
      })
    } else if (diff < 0) {
      var neededArgs = slice(0, length, args)
      result = f.apply(null, neededArgs)
      if (isFunction(result)) {
        var remainingArgs = slice(length, args.length, args)
        return curry(result).apply(null, remainingArgs)
      } else {
        return result
      }
    }
  }
}

function slice (start, end, arrayLike) {
  var out = []
  var i = 0
  for (i = start; i < end; ++i) {
    out[i - start] = arrayLike[i]
  }
  return out
}

function isFunction (v) {
  return typeof v === 'function'
}

function toArray (argsObj) {
  return slice(0, argsObj.length, argsObj)
}
