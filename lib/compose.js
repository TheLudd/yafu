export default compose

function compose (f, g, x) {
  return f(g(x))
}
