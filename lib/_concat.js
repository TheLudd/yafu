export default _concat

function _concat (a, b) {
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
