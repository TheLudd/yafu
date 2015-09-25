import curry from './curry'
export default curry(_compose)

function _compose (f, g, x) {
  return f(g(x))
}
