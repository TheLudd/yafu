export default _compose

function _compose (f, g, x) {
  return f(g(x))
}
