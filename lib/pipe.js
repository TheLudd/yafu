module.exports = pipe

function pipe (fnList, x) {
  var out = x
  var i
  for (i = 0; i < fnList.length; ++i) {
    out = fnList[i](out)
  }
  return out
}
