export default _apply

function _apply (f, a) {
  switch (a.length) {
    case 1: return f(a[0])
    case 2: return f(a[0], a[1])
    case 3: return f(a[0], a[1], a[2])
    case 4: return f(a[0], a[1], a[2], a[3])
    case 5: return f(a[0], a[1], a[2], a[3], a[4])
    default: return f.apply(null, a)
  }
}
