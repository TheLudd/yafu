module.exports = {
  from: from,
  nothingIf: nothingIf,
  of: of
}

function from (v) {
  return v == null ? nothing : new Just(v)
}

function nothingIf (pred, x) {
  return pred(x) ? nothing : new Just(x)
}

function of (v) {
  return new Just(v)
}

class Just {

  constructor (v) {
    this.value = v
  }

  equals (b) {
    return this.value === b.value
  }

  map (f) {
    return new Just(f(this.value))
  }

  reduce (fn, a) {
    return fn(a, this.value)
  }

}

class Nothing {

  equals (b) {
    return this === b
  }

  map () {
    return this
  }

  reduce (_, a) {
    return a
  }

}

var rt = () => nothing
Nothing.prototype.map = rt
const nothing = new Nothing()
