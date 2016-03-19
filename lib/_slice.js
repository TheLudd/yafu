export default _slice

function _slice (start, end, arrayLike) {
  let i
  const out = []
  for (i = start; i < end; ++i) {
    out[i - start] = arrayLike[i]
  }
  return out
}
